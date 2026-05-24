import React, { useState, useRef, useEffect } from 'react';
import { Camera, Image as ImageIcon, History, Sparkles, RefreshCw } from 'lucide-react';

type AnalysisResult = {
  menu: string;
  kcal: string;
  carbs: string;
  protein: string;
  fat: string;
};

const Review: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const stopCamera = () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    };

    async function startCamera() {
      stopCamera();
      setCameraError(null);

      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: { ideal: 720 },
            height: { ideal: 720 },
          },
          audio: false,
        });

        if (cancelled) {
          mediaStream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = mediaStream;
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.warn('카메라 권한 또는 실행 환경 때문에 미리보기를 표시할 수 없습니다.', error);
        setCameraError('카메라 권한을 허용하면 바로 음식 스캔을 시작할 수 있어요.');
      }
    }

    if (!preview) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      cancelled = true;
      stopCamera();
    };
  }, [preview]);

  const handleCapture = () => {
    if (preview) {
      setPreview(null);
      setResult(null);
      setIsScanning(false);
      return;
    }

    const video = videoRef.current;
    if (!video || video.readyState < 2) {
      setCameraError('카메라 화면이 준비된 뒤 다시 촬영해주세요.');
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    setPreview(canvas.toDataURL('image/jpeg'));
    setIsScanning(true);

    window.setTimeout(() => {
      setIsScanning(false);
      setResult({
        menu: '제육볶음 & 현미밥',
        kcal: '780 kcal',
        carbs: '82g',
        protein: '48g',
        fat: '24g',
      });
    }, 1500);
  };

  return (
    <div className="app-page scanner-page">
      <section className="scanner-title page-title">
        <p className="page-eyebrow">Vision AI Scanner</p>
        <h2 className="page-heading compact">푸드 렌즈</h2>
      </section>

      <section className="scanner-stage">
        <div className="viewfinder">
          {preview ? (
            <img src={preview} className="viewfinder-media" alt="촬영된 음식" />
          ) : cameraError ? (
            <div className="camera-fallback">
              <Camera size={34} />
              <span>{cameraError}</span>
            </div>
          ) : (
            <video ref={videoRef} autoPlay playsInline muted className="viewfinder-media" />
          )}

          <span className="corner-guide top-left" />
          <span className="corner-guide top-right" />
          <span className="corner-guide bottom-left" />
          <span className="corner-guide bottom-right" />

          {(isScanning || (!preview && !cameraError)) && <span className="scan-line" />}
        </div>

        <div className="scanner-feedback">
          {isScanning ? (
            <div className="scan-status">
              <Sparkles size={16} />
              <span>Vision AI 실시간 성분 분석 중...</span>
            </div>
          ) : result ? (
            <div className="result-card">
              <div className="result-header">
                <span className="result-menu">{result.menu}</span>
                <span className="result-kcal">{result.kcal}</span>
              </div>
              <div className="result-grid">
                <div>
                  <p className="mini-label">탄수화물</p>
                  <p className="result-value">{result.carbs}</p>
                </div>
                <div>
                  <p className="mini-label">단백질</p>
                  <p className="result-value brand-text">{result.protein}</p>
                </div>
                <div>
                  <p className="mini-label">지방</p>
                  <p className="result-value">{result.fat}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="scanner-help">
              푸드 다이어리 AI 시스템이 한 접시에 담긴 다중 객체를 분할 인식하여 영양 칼로리를 계산합니다.
            </p>
          )}
        </div>
      </section>

      <section className="scanner-controls">
        <div className="control-row">
          <button className="control-button" type="button">
            <span className="control-icon">
              <ImageIcon size={18} />
            </span>
            <span className="control-label">Album</span>
          </button>

          <button className={`shutter ${preview ? 'reset' : ''}`} type="button" onClick={handleCapture} aria-label={preview ? '다시 촬영' : '촬영'}>
            <span className="shutter-core">
              {preview ? <RefreshCw size={20} /> : <span className="shutter-ring" />}
            </span>
          </button>

          <button className="control-button" type="button">
            <span className="control-icon">
              <History size={18} />
            </span>
            <span className="control-label">History</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Review;
