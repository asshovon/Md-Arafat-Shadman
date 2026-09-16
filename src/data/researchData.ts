import { ResearchPaper } from '../types';

export const primaryResearch: ResearchPaper = {
  id: 'knee-bone-loss-dl',
  title: 'Automated Detection of Knee Bone Loss in X-ray Images Using Deep Learning',
  subtitle: 'A Clinically Explainable Deep Convolutional Framework for Osteopenia and Subchondral Bone Mineral Loss Triage',
  author: 'Md. Arafat Shadman',
  institution: 'Department of Computer Science and Engineering, Bangladesh University of Business & Technology (BUBT)',
  status: 'In Review',
  date: '2024 - 2025',
  abstract: 'Osteopenia and progressive knee bone loss are critical precursors to degenerative joint collapse and severe osteoarthritis. While Dual-energy X-ray Absorptiometry (DEXA) serves as the clinical gold standard for bone mineral density, its cost and scarcity limit rural triage. This research proposes an automated, explainable computer vision pipeline utilizing fine-tuned deep residual architectures (ResNet-50 and DenseNet-121) augmented with Contrast-Limited Adaptive Histogram Equalization (CLAHE). Tested on a multi-class dataset of 1,280 digital knee radiographs, the optimized model achieves 94.8% overall accuracy (95.1% sensitivity, 93.2% precision). Furthermore, Gradient-weighted Class Activation Mapping (Grad-CAM) confirms that the network accurately isolates trabecular bone loss in the tibial plateau and medial femoral condyles without relying on soft-tissue artifacts.',
  problem: 'Early stages of knee bone loss (osteopenia) often manifest subtly on conventional planar radiographs without distinct joint space collapse. Radiologists face high diagnostic fatigue when reviewing hundreds of high-volume screening studies daily, leading to inter-observer variability and missed early interventions.',
  researchGap: 'Most existing computational bone studies either focus exclusively on late-stage Kellgren-Lawrence (KL) osteoarthritis classification or rely on whole-body DEXA scans. There is an acute lack of explainable, lightweight AI frameworks that can detect subchondral bone mineral loss directly from standard knee X-rays commonly accessible in district hospitals.',
  methodology: {
    datasetInfo: 'Curated 1,280 standardized digital anterior-posterior (AP) knee radiograph images categorized into Normal Bone Density, Early-Stage Osteopenia, and Marked Bone Loss.',
    preprocessing: 'Applied Contrast-Limited Adaptive Histogram Equalization (CLAHE) to sharpen trabecular micro-architecture, followed by spatial normalization to 224x224 pixels and stochastic affine rotations/flips for data augmentation.',
    architecture: 'Fine-tuned ResNet-50 and DenseNet-121 feature backbones initialized with ImageNet weights, coupled with a custom global average pooling head, dropout regularization (p=0.4), and a dense softmax classification layer.',
    training: 'Trained using Cross-Entropy Loss optimized via AdamW (initial lr=1e-4 with cosine annealing scheduler) for 60 epochs on an NVIDIA RTX GPU with batch size of 32.',
    interpretability: 'Implemented Grad-CAM over the final convolutional bottleneck (Layer 4 in ResNet-50) to produce spatial gradient activation heatmaps overlaid on original radiographs for clinical audit.'
  },
  metrics: {
    accuracy: 94.8,
    precision: 93.2,
    recall: 95.1,
    f1Score: 94.1,
    totalImages: 1280
  },
  confusionMatrix: {
    tp: 608,
    fp: 33,
    fn: 31,
    tn: 608
  },
  githubUrl: 'https://github.com/asshovon',
  doi: 'arXiv:2502.xxxx [cs.CV]'
};

export const researchHighlights = [
  {
    step: '1. Problem Formulation',
    title: 'Clinical Diagnostic Bottleneck',
    description: 'Screening thousands of knee radiographs manually leads to subtle early-stage bone density diagnostic omissions.'
  },
  {
    step: '2. Research Gap',
    title: 'Lack of Explainable Radiograph AI',
    description: 'Existing models lack subchondral focus and explainability needed to earn trust among practicing orthopedic surgeons.'
  },
  {
    step: '3. Methodology',
    title: 'CLAHE + Deep ResNet-50',
    description: 'High-frequency trabecular enhancement paired with deep residual transfer learning to maximize feature discrimination.'
  },
  {
    step: '4. Dataset Curation',
    title: '1,280 Digitized Radiographs',
    description: 'Rigorous multi-class balanced dataset with verified radiologist ground-truth annotation across density stages.'
  },
  {
    step: '5. Experiment & Optimization',
    title: 'Ablation & Hyperparameter Tuning',
    description: 'Systematic comparison across VGG-16, ResNet-50, and DenseNet-121 with AdamW optimizer and cosine annealing.'
  },
  {
    step: '6. Clinical Results',
    title: '94.8% Test Accuracy',
    description: 'Superior diagnostic sensitivity (95.1%) and F1-score (94.1%) outperforming baseline standard models.'
  },
  {
    step: '7. Grad-CAM Interpretability',
    title: 'Transparent Attention Heatmaps',
    description: 'Generates gradient localization maps proving attention focuses on femoral condyle and tibial plateau regions.'
  },
  {
    step: '8. Publication & Code',
    title: 'Open Source & Conference Submission',
    description: 'Codebase, pre-trained weights, and reproduction scripts maintained openly on GitHub.'
  }
];
