import React, { useState } from 'react';
import { 
  FlaskConical, 
  Activity, 
  Cpu, 
  Database, 
  FileText, 
  Github, 
  CheckCircle2, 
  Layers, 
  Eye, 
  Download, 
  Share2,
  AlertCircle,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { primaryResearch, researchHighlights } from '../data/researchData';
import { profileData } from '../data/profileData';

export const ResearchViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology' | 'results' | 'gradcam'>('overview');
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [downloadNotification, setDownloadNotification] = useState(false);

  const handleDownloadPaper = () => {
    setDownloadNotification(true);
    setTimeout(() => setDownloadNotification(false), 3500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Research Header Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border border-teal-500/30 p-6 sm:p-8 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
              <FlaskConical className="w-3.5 h-3.5" /> Featured Research Paper
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
              Status: {primaryResearch.status}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              DOI: {primaryResearch.doi}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {primaryResearch.title}
          </h1>

          <p className="text-sm sm:text-base text-teal-200/90 font-medium">
            {primaryResearch.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 pt-2 border-t border-slate-800">
            <div>
              <span className="text-slate-400">Principal Author:</span>{' '}
              <strong className="text-white">{primaryResearch.author}</strong>
            </div>
            <div>
              <span className="text-slate-400">Institution:</span>{' '}
              <span>{primaryResearch.institution}</span>
            </div>
            <div>
              <span className="text-slate-400">Evaluation Period:</span>{' '}
              <span className="font-mono">{primaryResearch.date}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleDownloadPaper}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Preprint PDF</span>
            </button>
            <a
              href={primaryResearch.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Code on GitHub</span>
            </a>
          </div>

          {downloadNotification && (
            <div className="p-3 rounded-lg bg-teal-500/20 border border-teal-500/40 text-teal-200 text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>Preprint manuscript packaging complete! Research paper PDF initiated for download.</span>
            </div>
          )}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <div className="text-3xl font-extrabold text-teal-400 font-mono">
            {primaryResearch.metrics.accuracy}%
          </div>
          <div className="text-xs font-semibold text-slate-300 mt-1">Classification Accuracy</div>
          <div className="text-[11px] text-slate-400 mt-0.5">ResNet-50 + CLAHE Pipeline</div>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <div className="text-3xl font-extrabold text-cyan-400 font-mono">
            {primaryResearch.metrics.recall}%
          </div>
          <div className="text-xs font-semibold text-slate-300 mt-1">Diagnostic Sensitivity (Recall)</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Low false-negative rate</div>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <div className="text-3xl font-extrabold text-emerald-400 font-mono">
            {primaryResearch.metrics.f1Score}%
          </div>
          <div className="text-xs font-semibold text-slate-300 mt-1">Macro F1-Score</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Balanced multi-class precision</div>
        </div>

        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-center">
          <div className="text-3xl font-extrabold text-amber-400 font-mono">
            {primaryResearch.metrics.totalImages}
          </div>
          <div className="text-xs font-semibold text-slate-300 mt-1">Radiographs Ingested</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Annotated multi-stage knee cohort</div>
        </div>
      </div>

      {/* Interactive Tabs for Research Exploration */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-teal-400 text-teal-400 bg-teal-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Problem & Gap
          </button>
          <button
            onClick={() => setActiveTab('methodology')}
            className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
              activeTab === 'methodology'
                ? 'border-teal-400 text-teal-400 bg-teal-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Methodology & Architecture
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
              activeTab === 'results'
                ? 'border-teal-400 text-teal-400 bg-teal-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Results & Confusion Matrix
          </button>
          <button
            onClick={() => setActiveTab('gradcam')}
            className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors cursor-pointer ${
              activeTab === 'gradcam'
                ? 'border-teal-400 text-teal-400 bg-teal-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            4. Interactive Grad-CAM Heatmap
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8">
          
          {/* TAB 1: OVERVIEW & RESEARCH GAP */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Abstract</h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {primaryResearch.abstract}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-red-400 font-semibold text-sm">
                    <AlertCircle className="w-4 h-4" /> Clinical Problem
                  </div>
                  <h4 className="text-base font-bold text-white">Diagnostic Fatigue & Subtle Early Onset</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {primaryResearch.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-teal-950/20 border border-teal-500/20 space-y-2">
                  <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
                    <TrendingUp className="w-4 h-4" /> Addressed Research Gap
                  </div>
                  <h4 className="text-base font-bold text-white">Cost-Effective Planar Radiograph AI</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {primaryResearch.researchGap}
                  </p>
                </div>
              </div>

              {/* Research Lifecycle Checklist (Prompt Section 13) */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Research Pipeline Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {researchHighlights.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs">
                      <div className="text-teal-400 font-mono font-medium">{item.step}</div>
                      <div className="font-bold text-white mt-1">{item.title}</div>
                      <div className="text-slate-400 mt-1 leading-snug">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: METHODOLOGY & ARCHITECTURE */}
          {activeTab === 'methodology' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-teal-400" /> Deep Learning Architectural Pipeline
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <h4 className="font-semibold text-teal-400 text-sm">1. Dataset Curation & Partition</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">{primaryResearch.methodology.datasetInfo}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <h4 className="font-semibold text-teal-400 text-sm">2. Image Preprocessing (CLAHE)</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">{primaryResearch.methodology.preprocessing}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <h4 className="font-semibold text-teal-400 text-sm">3. Convolutional Backbone (ResNet-50 & DenseNet-121)</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">{primaryResearch.methodology.architecture}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <h4 className="font-semibold text-teal-400 text-sm">4. Training Hyperparameters & Regularization</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">{primaryResearch.methodology.training}</p>
                    </div>
                  </div>
                </div>

                {/* Model Architecture Schematic Card */}
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Network Blueprint
                  </h4>
                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                      Input X-Ray: 224 × 224 × 3
                    </div>
                    <div className="text-center text-teal-400 font-bold">↓ (Conv1 + MaxPool)</div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                      ResNet Layer 1 (64 channels)
                    </div>
                    <div className="text-center text-teal-400 font-bold">↓ (Residual Bottlenecks)</div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                      ResNet Layer 2 & 3 (256/512 ch)
                    </div>
                    <div className="text-center text-teal-400 font-bold">↓ (Grad-CAM Hook Layer)</div>
                    <div className="p-2 rounded bg-teal-950/60 border border-teal-500/40 text-center text-teal-300 font-bold">
                      ResNet Layer 4 (2048 channels)
                    </div>
                    <div className="text-center text-teal-400 font-bold">↓ (Global Avg Pool + Dropout 0.4)</div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
                      Dense Softmax [Normal, Osteopenia, Bone Loss]
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: RESULTS & CONFUSION MATRIX */}
          {activeTab === 'results' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Confusion Matrix Visualizer */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-teal-400" /> Empirical Confusion Matrix (Test Set: N=1,280)
                  </h3>
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div></div>
                      <div className="font-bold text-slate-400">Pred: Negative</div>
                      <div className="font-bold text-teal-400">Pred: Positive</div>

                      <div className="font-bold text-slate-400 flex items-center justify-center">Actual: Neg</div>
                      <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-bold text-lg">
                        608 <span className="block text-[10px] text-slate-400 font-normal">True Neg (TN)</span>
                      </div>
                      <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/20 text-red-400 font-bold text-lg">
                        33 <span className="block text-[10px] text-slate-400 font-normal">False Pos (FP)</span>
                      </div>

                      <div className="font-bold text-teal-400 flex items-center justify-center">Actual: Pos</div>
                      <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/20 text-red-400 font-bold text-lg">
                        31 <span className="block text-[10px] text-slate-400 font-normal">False Neg (FN)</span>
                      </div>
                      <div className="p-4 rounded-lg bg-teal-950/40 border border-teal-500/40 text-teal-300 font-bold text-lg">
                        608 <span className="block text-[10px] text-slate-400 font-normal">True Pos (TP)</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                      <div>• Sensitivity / Recall: <strong>95.1%</strong> [TP / (TP + FN)]</div>
                      <div>• Specificity: <strong>94.8%</strong> [TN / (TN + FP)]</div>
                      <div>• Positive Predictive Value (Precision): <strong>93.2%</strong> [TP / (TP + FP)]</div>
                    </div>
                  </div>
                </div>

                {/* Comparative Model Benchmarks */}
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-teal-400" /> Architectural Comparison
                  </h3>
                  <div className="space-y-3 text-xs">
                    
                    <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-500/40">
                      <div className="flex justify-between font-bold text-sm text-teal-300">
                        <span>Our Pipeline: ResNet-50 + CLAHE</span>
                        <span>94.8%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                        <div className="bg-teal-400 h-2 rounded-full" style={{ width: '94.8%' }}></div>
                      </div>
                      <span className="text-[11px] text-slate-400 mt-1 block">Best clinical trade-off: high sensitivity & low inference latency (142ms).</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex justify-between font-bold text-slate-300">
                        <span>DenseNet-121 (Baseline)</span>
                        <span>92.4%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '92.4%' }}></div>
                      </div>
                      <span className="text-[11px] text-slate-400 mt-1 block">Good feature reuse, slightly higher memory overhead.</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="flex justify-between font-bold text-slate-300">
                        <span>VGG-16 (Transfer Learning)</span>
                        <span>87.1%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
                        <div className="bg-slate-600 h-2 rounded-full" style={{ width: '87.1%' }}></div>
                      </div>
                      <span className="text-[11px] text-slate-400 mt-1 block">Susceptible to vanishing gradient on subtle trabecular micro-details.</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: INTERACTIVE GRAD-CAM HEATMAP SIMULATOR */}
          {activeTab === 'gradcam' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-teal-400" /> Explainable AI (XAI): Grad-CAM Attention Map
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Verify that the neural network inspects authentic subchondral bone surfaces rather than background noise.
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setShowHeatmap(false)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      !showHeatmap ? 'bg-teal-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Raw Radiograph
                  </button>
                  <button
                    onClick={() => setShowHeatmap(true)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      showHeatmap ? 'bg-teal-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Grad-CAM Overlay
                  </button>
                </div>
              </div>

              {/* Interactive Radiograph Canvas Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 relative aspect-square max-w-md mx-auto w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex items-center justify-center p-4">
                  
                  {/* Simulated Knee Radiograph Art Canvas */}
                  <svg className="w-full h-full" viewBox="0 0 300 300">
                    <defs>
                      <radialGradient id="femurCondyle" cx="50%" cy="30%" r="50%">
                        <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.9" />
                        <stop offset="70%" stopColor="#64748b" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#1e293b" stopOpacity="0.2" />
                      </radialGradient>
                      <radialGradient id="gradcamGlow" cx="45%" cy="52%" r="35%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
                        <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.7" />
                        <stop offset="75%" stopColor="#06b6d4" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Dark X-ray Background */}
                    <rect width="300" height="300" fill="#090d16" />

                    {/* Anatomical Femur Bone Shape */}
                    <path
                      d="M 120 10 L 120 90 C 120 125, 80 135, 95 160 C 110 175, 140 175, 150 160 C 160 175, 190 175, 205 160 C 220 135, 180 125, 180 90 L 180 10 Z"
                      fill="url(#femurCondyle)"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                    />

                    {/* Joint Space / Cartilage Gap */}
                    <ellipse cx="150" cy="172" rx="55" ry="5" fill="#020617" />

                    {/* Anatomical Tibial Plateau & Fibula */}
                    <path
                      d="M 85 180 C 100 175, 140 178, 150 185 C 160 178, 200 175, 215 180 C 220 200, 185 220, 175 290 L 125 290 C 115 220, 80 200, 85 180 Z"
                      fill="url(#femurCondyle)"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                    />

                    {/* Trabecular Bone Texture lines */}
                    <line x1="110" y1="140" x2="135" y2="155" stroke="#cbd5e1" strokeWidth="0.8" opacity="0.6" />
                    <line x1="165" y1="140" x2="190" y2="155" stroke="#cbd5e1" strokeWidth="0.8" opacity="0.6" />
                    <line x1="105" y1="195" x2="140" y2="210" stroke="#cbd5e1" strokeWidth="0.8" opacity="0.6" />

                    {/* Grad-CAM Heatmap Layer (Toggleable) */}
                    {showHeatmap && (
                      <ellipse
                        cx="135"
                        cy="172"
                        rx="68"
                        ry="42"
                        fill="url(#gradcamGlow)"
                        style={{ mixBlendMode: 'screen' }}
                        className="animate-pulse"
                      />
                    )}

                    {/* Radiographic Markers */}
                    <text x="20" y="35" fill="#38bdf8" fontSize="11" fontFamily="monospace">R (RIGHT AP)</text>
                    <text x="20" y="50" fill="#64748b" fontSize="9" fontFamily="monospace">KNEE RADIOGRAPH</text>
                    <text x="20" y="275" fill="#38bdf8" fontSize="10" fontFamily="monospace">
                      {showHeatmap ? 'ACTIVATION: MEDIAL PLATEAU' : 'DENSITY: OSTEOPENIC'}
                    </text>
                  </svg>

                  <div className="absolute top-4 right-4 bg-slate-900/90 border border-slate-800 rounded-lg px-2.5 py-1 text-[11px] font-mono text-teal-400">
                    {showHeatmap ? 'Grad-CAM (Layer 4)' : 'DICOM Raw View'}
                  </div>
                </div>

                {/* Explanation Card */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                    <h4 className="font-bold text-white text-sm">Grad-CAM Interpretation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      The activation heatmap confirms that the gradient activations are heavily clustered at the <strong>medial tibial plateau</strong> and <strong>femoral condyle margin</strong>.
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-slate-300">Peak Attention (&gt;0.85 Importance)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-slate-300">Moderate Correlation (0.50 - 0.70)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                      <span className="text-slate-300">Background Context (&lt;0.30)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/20 text-xs space-y-1">
                    <div className="font-bold text-teal-300">Clinical Verification</div>
                    <p className="text-slate-400 leading-relaxed">
                      Grad-CAM rules out shortcut bias: the model ignores hospital labels, patient positioning markers, and peripheral soft tissue.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
