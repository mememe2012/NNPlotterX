window.NEURAL_PRESETS = {
  mlp: {
    name: "MLP Classifier",
    input: { shape: "784" },
    layers: [
      { name: "Dense", type: "dense", units: 128, activation: "ReLU" },
      { name: "Dense", type: "dense", units: 64, activation: "ReLU" },
      { name: "Classifier", type: "dense", units: 10, activation: "Softmax" }
    ]
  },
  cnn: {
    name: "CNN Image Classifier",
    input: { shape: "224 × 224 × 3" },
    layers: [
      { name: "Conv2D", type: "conv", units: 32, shape: "112 × 112 × 32", activation: "ReLU", params: { kernelSize: "3×3", strides: 1, padding: "same" } },
      { name: "MaxPool", type: "pool", units: 32, shape: "56 × 56 × 32", params: { poolSize: "2×2", strides: 2 } },
      { name: "Conv2D", type: "conv", units: 64, shape: "28 × 28 × 64", activation: "ReLU", params: { kernelSize: "3×3", strides: 1, padding: "same" } },
      { name: "MaxPool", type: "pool", units: 64, shape: "14 × 14 × 64", params: { poolSize: "2×2", strides: 2 } },
      { name: "Global Avg Pool", type: "pool", units: 128 },
      { name: "Classifier", type: "dense", units: 10, activation: "Softmax" }
    ]
  },
  encoder: {
    name: "Transformer Encoder",
    input: { shape: "512 × 768" },
    layers: [
      { name: "Embedding", type: "embedding", units: 768, shape: "512 × 768" },
      { name: "Multi-Head Attention", type: "attention", units: 768, activation: "8 heads", params: { heads: 8, keyDim: 64 } },
      { name: "Add & Norm", type: "norm", units: 768 },
      { name: "Feed Forward", type: "dense", units: 3072, activation: "GELU" },
      { name: "Add & Norm", type: "norm", units: 768 },
      { name: "Output", type: "dense", units: 768 }
    ]
  },
  resnet: {
    name: "ResNet-18",
    input: { shape: "224 × 224 × 3" },
    layers: [
      { name: "Conv Stem", type: "conv", units: 64, shape: "112 × 112 × 64", activation: "ReLU" },
      { name: "MaxPool", type: "pool", units: 64, shape: "56 × 56 × 64" },
      { name: "Residual Block ×2", type: "residual", units: 64, shape: "56 × 56 × 64", params: { blocks: 2, strides: 1 } },
      { name: "Residual Block ×2", type: "residual", units: 128, shape: "28 × 28 × 128", params: { blocks: 2, strides: 2 } },
      { name: "Residual Block ×2", type: "residual", units: 256, shape: "14 × 14 × 256", params: { blocks: 2, strides: 2 } },
      { name: "Global Avg Pool", type: "pool", units: 256 },
      { name: "Classifier", type: "dense", units: 1000, activation: "Softmax" }
    ]
  },
  unet: {
    name: "U-Net Segmentation",
    input: { shape: "256 × 256 × 3" },
    layers: [
      { name: "Encoder 1", type: "conv", units: 64, shape: "256 × 256 × 64", activation: "ReLU", params: { kernelSize: "3×3", strides: 1, padding: "same" } },
      { name: "Encoder 2", type: "conv", units: 128, shape: "128 × 128 × 128", activation: "ReLU", params: { kernelSize: "3×3", strides: 2, padding: "same" } },
      { name: "Encoder 3", type: "conv", units: 256, shape: "64 × 64 × 256", activation: "ReLU", params: { kernelSize: "3×3", strides: 2, padding: "same" } },
      { name: "Bottleneck", type: "conv", units: 512, shape: "32 × 32 × 512", activation: "ReLU", params: { kernelSize: "3×3", strides: 2, padding: "same" } },
      { name: "Decoder 3", type: "upsample", units: 256, shape: "64 × 64 × 256", activation: "Skip connection", params: { scale: 2 } },
      { name: "Decoder 2", type: "upsample", units: 128, shape: "128 × 128 × 128", activation: "Skip connection", params: { scale: 2 } },
      { name: "Mask", type: "conv", units: 1, shape: "256 × 256 × 1", activation: "Sigmoid" }
    ]
  },
  lstm: {
    name: "Sequence LSTM",
    input: { shape: "128 × 64" },
    layers: [
      { name: "Embedding", type: "embedding", units: 128, shape: "128 × 128" },
      { name: "LSTM", type: "recurrent", units: 256, shape: "128 × 256", activation: "tanh" },
      { name: "LSTM", type: "recurrent", units: 128, shape: "128 × 128", activation: "tanh" },
      { name: "Dropout", type: "dropout", units: 128, activation: "p = 0.2", params: { rate: 0.2 } },
      { name: "Classifier", type: "dense", units: 8, activation: "Softmax" }
    ]
  },
  vae: {
    name: "Variational Autoencoder",
    input: { shape: "784" },
    layers: [
      { name: "Encoder", type: "dense", units: 256, activation: "ReLU" },
      { name: "Latent μ", type: "latent", units: 4 },
      { name: "Latent σ", type: "latent", units: 4 },
      { name: "Sampling z", type: "sampling", units: 4 },
      { name: "Decoder", type: "dense", units: 256, activation: "ReLU" },
      { name: "Reconstruction", type: "dense", units: 8, activation: "Sigmoid" }
    ]
  },
  gan: {
    name: "GAN Generator",
    input: { shape: "100 (noise)" },
    layers: [
      { name: "Dense Projection", type: "dense", units: 12544, shape: "7 × 7 × 256", activation: "ReLU" },
      { name: "Transpose Conv", type: "upsample", units: 128, shape: "14 × 14 × 128", activation: "ReLU" },
      { name: "Transpose Conv", type: "upsample", units: 64, shape: "28 × 28 × 64", activation: "ReLU" },
      { name: "Transpose Conv", type: "upsample", units: 32, shape: "56 × 56 × 32", activation: "ReLU" },
      { name: "Generated Image", type: "conv", units: 3, shape: "112 × 112 × 3", activation: "Tanh" }
    ]
  }
};
