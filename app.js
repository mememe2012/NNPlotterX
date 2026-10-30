(() => {
  "use strict";

  const translations = {
    zh: {
      export: "导出", exportPng: "导出为 PNG", exportSvg: "导出为 SVG",
      pageTitle: "神经网络绘图器", pageSubtitle: "设计、预览并导出你的网络架构",
      flatView: "神经元", threeDView: "3D 视图", deepView: "深度学习视图",
      legendHidden: "全连接层", legendFeature: "特征提取", legendOutput: "输出层",
      canvasHint: "每一列代表一层，每个圆点代表一个神经元 · 滚动查看完整网络",
      rotateHint: "拖动画布旋转 3D 视角 · 双击复位",
      rotateCubeHint: "拖动画布旋转各层立方体 · 连线与画布保持不动",
      rotatePlateHint: "拖动画布旋转各层向量板 · 连线与画布保持不动",
      editorTitle: "网络结构", editorDescription: "选择示例、导入模型或自定义网络",
      editable: "可编辑", visualEditor: "图形编辑", schemaHint: "逐层编辑神经元数与激活函数",
      apply: "应用结构", overview: "架构概览", ready: "就绪", layers: "网络层数",
      parameters: "估算参数量", input: "输入", output: "输出",
      invalidJson: "JSON 格式错误：", invalidModel: "结构无效：",
      applied: "网络结构已更新", pngDone: "PNG 图片已导出", svgDone: "SVG 图片已导出",
      exportFailed: "导出失败，请重试", presetLoaded: "模型结构已载入",
      fit: "画布已适应", zoomIn: "放大", zoomOut: "缩小",
      resetRotation: "复位 3D 视角",
      resetCubeRotation: "复位立方体",
      resetPlateRotation: "复位向量板",
      importOnnx: "导入 ONNX 模型", onnxImported: "ONNX 计算图已导入",
      onnxInvalid: "无法读取 ONNX 模型：",
      onnxTooLarge: "轻量版仅支持小于 256 MB 的 ONNX 文件。",
      onnxNoGraph: "模型中没有可绘制的计算节点。",
      modelName: "模型名称", inputShape: "输入形状", layerName: "层名称",
      layerType: "类型", neurons: "神经元 / 通道", activation: "激活函数",
      outputShape: "输出形状（可选）", removeLayer: "删除层", addLayer: "+ 添加网络层",
      layer: "网络层", unknown: "未知", modelMlP: "多层感知机（MLP）",
      modelCnn: "卷积神经网络（CNN）", modelEncoder: "Transformer 编码器",
      modelResnet: "ResNet 残差网络", modelUnet: "U-Net 图像分割",
      modelLstm: "LSTM 序列模型", modelVae: "变分自编码器（VAE）",
      modelGan: "GAN 生成器", modelCustom: "自定义网络",
      parameterLabels: {
        kernelSize: "卷积核", strides: "步幅", padding: "填充",
        poolSize: "池化窗口", heads: "注意力头", keyDim: "键维度",
        rate: "丢弃率", scale: "放大倍数", blocks: "残差块",
        epsilon: "稳定系数", vocabSize: "词表", embeddingDim: "嵌入维度",
        method: "采样方式"
      },
      types: {
        dense: "全连接", conv: "卷积", pool: "池化", attention: "注意力",
        norm: "归一化", recurrent: "循环层", dropout: "Dropout",
        embedding: "嵌入层", upsample: "上采样", residual: "残差块",
        latent: "潜变量", sampling: "采样"
      }
    },
    en: {
      export: "Export", exportPng: "Export as PNG", exportSvg: "Export as SVG",
      pageTitle: "Neural Network Plotter", pageSubtitle: "Design, preview, and export your network architecture",
      flatView: "Neurons", threeDView: "3D view", deepView: "Deep learning",
      legendHidden: "Dense layers", legendFeature: "Feature extraction", legendOutput: "Output layer",
      canvasHint: "Each column is a layer, each dot a neuron · Scroll to explore",
      rotateHint: "Drag the canvas to rotate · Double-click to reset",
      rotateCubeHint: "Drag to rotate the layer cubes · Connections and canvas stay fixed",
      rotatePlateHint: "Drag to rotate each vector plate · Connections and canvas stay fixed",
      editorTitle: "Architecture", editorDescription: "Choose a preset, import a model, or build your own",
      editable: "EDITABLE", visualEditor: "Visual editor", schemaHint: "Edit neurons and activation layer by layer",
      apply: "Apply changes", overview: "Architecture overview", ready: "READY",
      layers: "Network layers", parameters: "Est. parameters", input: "Input", output: "Output",
      invalidJson: "Invalid JSON: ", invalidModel: "Invalid architecture: ",
      applied: "Architecture updated", pngDone: "PNG image exported", svgDone: "SVG image exported",
      exportFailed: "Export failed. Please try again.", presetLoaded: "Architecture loaded",
      fit: "Canvas fitted", zoomIn: "Zoom in", zoomOut: "Zoom out",
      resetRotation: "Reset 3D view",
      resetCubeRotation: "Reset cube rotation",
      resetPlateRotation: "Reset vector plates",
      importOnnx: "Import ONNX model", onnxImported: "ONNX graph imported",
      onnxInvalid: "Could not read ONNX model: ",
      onnxTooLarge: "The lightweight importer supports ONNX files under 256 MB.",
      onnxNoGraph: "The model contains no drawable graph nodes.",
      modelName: "Model name", inputShape: "Input shape", layerName: "Layer name",
      layerType: "Type", neurons: "Neurons / channels", activation: "Activation",
      outputShape: "Output shape (optional)", removeLayer: "Remove layer", addLayer: "+ Add layer",
      layer: "Layer", unknown: "Unknown", modelMlP: "Multilayer Perceptron (MLP)",
      modelCnn: "Convolutional Network (CNN)", modelEncoder: "Transformer Encoder",
      modelResnet: "ResNet Residual Network", modelUnet: "U-Net Segmentation",
      modelLstm: "LSTM Sequence Model", modelVae: "Variational Autoencoder (VAE)",
      modelGan: "GAN Generator", modelCustom: "Custom architecture",
      parameterLabels: {
        kernelSize: "Kernel", strides: "Stride", padding: "Padding",
        poolSize: "Pool", heads: "Heads", keyDim: "Key dim",
        rate: "Dropout", scale: "Scale", blocks: "Blocks",
        epsilon: "Epsilon", vocabSize: "Vocab", embeddingDim: "Embedding",
        method: "Sampling"
      },
      types: {
        dense: "Dense", conv: "Convolution", pool: "Pooling", attention: "Attention",
        norm: "Normalization", recurrent: "Recurrent", dropout: "Dropout",
        embedding: "Embedding", upsample: "Upsampling", residual: "Residual block",
        latent: "Latent variable", sampling: "Sampling"
      }
    }
  };

  const presetKeys = {
    mlp: "modelMlP", cnn: "modelCnn", encoder: "modelEncoder", resnet: "modelResnet",
    unet: "modelUnet", lstm: "modelLstm", vae: "modelVae", gan: "modelGan"
  };
  const layerTypes = ["dense", "conv", "pool", "attention", "norm", "recurrent", "dropout", "embedding", "upsample", "residual", "latent", "sampling"];
  const layerParameterFields = {
    conv: [
      { key: "kernelSize", type: "text", defaultValue: "3×3" },
      { key: "strides", type: "number", defaultValue: 1 },
      { key: "padding", type: "text", defaultValue: "same" }
    ],
    pool: [
      { key: "poolSize", type: "text", defaultValue: "2×2" },
      { key: "strides", type: "number", defaultValue: 2 }
    ],
    attention: [
      { key: "heads", type: "number", defaultValue: 8 },
      { key: "keyDim", type: "number", defaultValue: 64 }
    ],
    dropout: [{ key: "rate", type: "number", defaultValue: 0.2, step: 0.05 }],
    upsample: [{ key: "scale", type: "number", defaultValue: 2 }],
    residual: [
      { key: "blocks", type: "number", defaultValue: 2 },
      { key: "strides", type: "number", defaultValue: 1 }
    ],
    norm: [{ key: "epsilon", type: "number", defaultValue: 0.00001, step: 0.00001 }],
    embedding: [
      { key: "vocabSize", type: "number", defaultValue: 10000 },
      { key: "embeddingDim", type: "number", defaultValue: 128 }
    ],
    sampling: [{ key: "method", type: "text", defaultValue: "reparameterization" }]
  };
  const input = document.getElementById("architecture-input");
  const jsonEditor = document.getElementById("json-editor");
  const visualEditor = document.getElementById("visual-editor");
  const errorBox = document.getElementById("editor-error");
  const svg = document.getElementById("network-svg");
  const viewport = document.getElementById("canvas-viewport");
  const presetSelect = document.getElementById("preset-select");
  const presets = window.NEURAL_PRESETS;
  let model = structuredClone(presets.mlp);
  let language = "zh";
  let zoom = 1;
  let activeView = "flat";
  let activeEditor = "visual";
  let rotationX = -14;
  let rotationY = 22;
  let cubeRotationX = -18;
  let cubeRotationY = 24;
  let pointerPosition = null;

  const t = key => translations[language][key] || key;
  const escapeXml = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]);
  const formatCount = value => value >= 1e9 ? `${(value / 1e9).toFixed(1)}B` : value >= 1e6 ? `${(value / 1e6).toFixed(1)}M` : value >= 1e3 ? `${(value / 1e3).toFixed(1)}K` : String(value);

  function validateArchitecture(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("根节点必须是对象");
    if (typeof value.name !== "string" || !value.name.trim()) throw new Error("name 必须是非空字符串");
    if (!value.input || typeof value.input !== "object" || typeof value.input.shape !== "string") throw new Error("input.shape 必须是字符串");
    if (!Array.isArray(value.layers) || value.layers.length === 0) throw new Error("layers 必须是非空数组");
    value.layers.forEach((layer, index) => {
      if (!layer || typeof layer !== "object" || Array.isArray(layer)) throw new Error(`layers[${index}] 必须是对象`);
      if (typeof layer.name !== "string" || !layer.name.trim()) throw new Error(`layers[${index}].name 必须是非空字符串`);
      if (typeof layer.type !== "string" || !layer.type.trim()) throw new Error(`layers[${index}].type 必须是非空字符串`);
      if (layer.units !== undefined && (!Number.isFinite(Number(layer.units)) || Number(layer.units) <= 0)) throw new Error(`layers[${index}].units 必须是正数`);
      if (layer.shape !== undefined && typeof layer.shape !== "string") throw new Error(`layers[${index}].shape 必须是字符串`);
      if (layer.activation !== undefined && typeof layer.activation !== "string") throw new Error(`layers[${index}].activation 必须是字符串`);
      if (layer.params !== undefined && (!layer.params || typeof layer.params !== "object" || Array.isArray(layer.params))) throw new Error(`layers[${index}].params 必须是对象`);
      if (layer.params) {
        Object.entries(layer.params).forEach(([key, parameter]) => {
          if (typeof parameter !== "string" && (typeof parameter !== "number" || !Number.isFinite(parameter) || parameter < 0)) {
            throw new Error(`layers[${index}].params.${key} 必须是字符串或非负数`);
          }
        });
      }
    });
    return value;
  }

  function syncJsonEditor() {
    input.value = JSON.stringify(model, null, 2);
  }

  function showError(message) {
    errorBox.textContent = message;
    errorBox.classList.add("visible");
  }

  function clearError() {
    errorBox.textContent = "";
    errorBox.classList.remove("visible");
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.timeout);
    showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  function labelShape(shape) {
    return shape || "";
  }

  function shapeDimensions(shape) {
    return (shape.match(/-?\d+/g) || []).map(Number).filter(dimension => Number.isSafeInteger(dimension) && dimension > 0);
  }

  function inputDimensions() {
    const dimensions = shapeDimensions(model.input.shape);
    if (dimensions.length >= 3 && dimensions[0] === 1) dimensions.shift();
    return dimensions;
  }

  function channelDimensionIndex(dimensions) {
    if (dimensions.length < 3) return -1;
    const first = dimensions[0];
    const lastIndex = dimensions.length - 1;
    const last = dimensions[lastIndex];
    if (dimensions.length > 3 && first > 4) return lastIndex;
    const firstLooksLikeChannels = first <= 4 || (first <= 128 && first * 2 <= last);
    const lastLooksLikeChannels = last <= 4 || (last <= 128 && last * 2 <= first);
    if (firstLooksLikeChannels && !lastLooksLikeChannels) return 0;
    return dimensions.length - 1;
  }

  function neuronCount(layer, inputLayer = false) {
    if (inputLayer) {
      const dimensions = inputDimensions();
      const count = dimensions.reduce((product, dimension) => product * dimension, 1);
      return Number.isSafeInteger(count) ? count : Number.MAX_SAFE_INTEGER;
    }
    const units = Number(layer.units);
    if (Number.isSafeInteger(units) && units > 0) return units;
    const shape = layer.shape || "";
    return shapeDimensions(shape).at(-1) || 1;
  }

  function layerCategory(layer, index) {
    if (index === model.layers.length - 1) return "output";
    if (["conv", "pool", "embedding", "attention", "upsample", "recurrent"].includes(layer.type)) return "feature";
    return "hidden";
  }

  function sampleIndexes(count, limit = 18) {
    if (count <= limit) return Array.from({ length: count }, (_, index) => index);
    return Array.from({ length: limit }, (_, index) => Math.round(index * (count - 1) / (limit - 1)));
  }

  function layerDetails(node) {
    if (node.type === "input") return labelShape(node.shape);
    return node.shape || "";
  }

  function layerParamSummary(node) {
    const fields = layerParameterFields[node.type] || [];
    return fields
      .map(field => {
        const value = node.params?.[field.key] ?? field.defaultValue;
        const label = translations[language].parameterLabels[field.key];
        return `${label} ${value}`;
      })
      .join(" · ");
  }

  function layerTypeLabel(node) {
    return node.type === "input" ? (language === "zh" ? "输入层" : "INPUT") : t("types")[node.type] || node.type.toUpperCase();
  }

  function labelMarkup(node, x, centerY, typeY = 67) {
    const title = node.name.length > 18 ? `${node.name.slice(0, 17)}…` : node.name;
    const detail = layerDetails(node);
    let markup = `<text class="layer-type-text" x="${x}" y="${typeY}" text-anchor="middle">${escapeXml(layerTypeLabel(node))}</text>`;
    markup += `<text class="layer-title" x="${x}" y="${centerY}" text-anchor="middle">${escapeXml(title)}</text>`;
    if (detail) markup += `<text class="layer-shape" x="${x}" y="${centerY + 18}" text-anchor="middle">${escapeXml(detail.length > 24 ? `${detail.slice(0, 23)}…` : detail)}</text>`;
    const countLabel = `${Number(node.count).toLocaleString()} ${language === "zh" ? "个神经元" : "neurons"}`;
    markup += `<text class="layer-count-label" x="${x}" y="${centerY + (detail ? 34 : 18)}" text-anchor="middle">${escapeXml(countLabel)}</text>`;
    const parameterSummary = layerParamSummary(node);
    const activationY = centerY + (detail ? 50 : 34);
    if (node.activation) markup += `<text class="layer-type" x="${x}" y="${activationY}" text-anchor="middle">${escapeXml(`ƒ ${node.activation}`)}</text>`;
    if (parameterSummary) markup += `<text class="layer-parameters" x="${x}" y="${activationY + (node.activation ? 15 : 0)}" text-anchor="middle">${escapeXml(parameterSummary)}</text>`;
    return markup;
  }

  function renderPlane(nodes, positions, centerY) {
    let markup = "";
    nodes.slice(0, -1).forEach((node, index) => {
      const from = positions[index];
      const to = positions[index + 1];
      const sourceIndexes = sampleIndexes(from.ys.length);
      const targetIndexes = sampleIndexes(to.ys.length);
      let pairs = [];
      if (sourceIndexes.length * targetIndexes.length <= 324) {
        pairs = sourceIndexes.flatMap(source => targetIndexes.map(target => [source, target]));
      } else {
        const samples = 18;
        pairs = Array.from({ length: samples * samples }, (_, pair) => [
          sourceIndexes[Math.floor(pair / samples)],
          targetIndexes[pair % samples]
        ]);
      }
      pairs.forEach(([source, target]) => {
        markup += `<path class="edge" fill="none" d="M${from.x + 13} ${from.ys[source]} C${from.x + 64} ${from.ys[source]},${to.x - 64} ${to.ys[target]},${to.x - 13} ${to.ys[target]}"/>`;
      });
      if (nodes[index + 1].type === "residual" && index > 0) {
        const skipStart = positions[index - 1].x + 13;
        const skipEnd = to.x - 13;
        markup += `<path class="residual" d="M${skipStart} ${centerY} C${skipStart} ${centerY - 115},${skipEnd} ${centerY - 115},${skipEnd} ${centerY}"/>`;
      }
    });

    nodes.forEach((node, index) => {
      const position = positions[index];
      position.ys.forEach(y => {
        markup += `<circle class="neuron ${node.category}" cx="${position.x}" cy="${y}" r="${position.radius}"/>`;
      });
      const typeY = Math.max(26, position.top - 26);
      markup += `<rect class="layer-type-pill" x="${position.x - 53}" y="${typeY - 15}" width="106" height="21" rx="7"/>`;
      markup += labelMarkup(node, position.x, position.bottom + 27, typeY);
    });
    return markup;
  }

  function projectBox(x, y, width, height, depth, angleX, angleY) {
    const cosX = Math.cos(angleX * Math.PI / 180);
    const sinX = Math.sin(angleX * Math.PI / 180);
    const cosY = Math.cos(angleY * Math.PI / 180);
    const sinY = Math.sin(angleY * Math.PI / 180);
    const rotate = ([vx, vy, vz]) => {
      const rotatedX = vx * cosY - vz * sinY;
      const rotatedZ = vx * sinY + vz * cosY;
      return [rotatedX, vy * cosX - rotatedZ * sinX, vy * sinX + rotatedZ * cosX];
    };
    const vertices = {
      ltf: [-width / 2, -height / 2, depth / 2],
      rtf: [width / 2, -height / 2, depth / 2],
      lbf: [-width / 2, height / 2, depth / 2],
      rbf: [width / 2, height / 2, depth / 2],
      ltb: [-width / 2, -height / 2, -depth / 2],
      rtb: [width / 2, -height / 2, -depth / 2],
      lbb: [-width / 2, height / 2, -depth / 2],
      rbb: [width / 2, height / 2, -depth / 2]
    };
    const projected = Object.fromEntries(Object.entries(vertices).map(([key, point]) => [key, rotate(point)]));
    const faces = [
      { keys: ["ltf", "rtf", "rbf", "lbf"], normal: [0, 0, 1], kind: "front" },
      { keys: ["rtb", "rbb", "lbb", "ltb"], normal: [0, 0, -1], kind: "front" },
      { keys: ["ltf", "ltb", "lbb", "lbf"], normal: [-1, 0, 0], kind: "side" },
      { keys: ["rtf", "rbf", "rbb", "rtb"], normal: [1, 0, 0], kind: "side" },
      { keys: ["ltf", "rtf", "rtb", "ltb"], normal: [0, -1, 0], kind: "top" },
      { keys: ["lbf", "lbb", "rbb", "rbf"], normal: [0, 1, 0], kind: "top" }
    ];
    const visibleFaces = faces
      .map(face => ({ ...face, facing: rotate(face.normal)[2] }))
      .filter(face => face.facing > .015)
      .sort((a, b) => {
        const averageDepth = face => face.keys.reduce((sum, key) => sum + projected[key][2], 0) / face.keys.length;
        return averageDepth(a) - averageDepth(b);
      });
    return { projected, visibleFaces };
  }

  function renderVectorPlates(nodes, positions, centerY) {
    let markup = "";
    nodes.slice(0, -1).forEach((node, index) => {
      const from = positions[index];
      const to = positions[index + 1];
      markup += `<path class="edge vector-connection" fill="none" marker-end="url(#connection-arrow)" d="M${from.x + from.width / 2 + 12} ${centerY} C${from.x + from.width / 2 + 42} ${centerY},${to.x - to.width / 2 - 42} ${centerY},${to.x - to.width / 2 - 12} ${centerY}"/>`;
    });
    nodes.forEach((node, index) => {
      const position = positions[index];
      const { x, top, height, width, depth } = position;
      const { projected, visibleFaces } = projectBox(x, centerY, width, height, depth, rotationX, rotationY);
      visibleFaces.forEach(face => {
        const points = face.keys.map(key => `${x + projected[key][0]},${centerY + projected[key][1]}`).join(" ");
        markup += `<polygon class="vector-face vector-${face.kind} ${node.category}" points="${points}"/>`;
      });
      const frontTopLeft = projected.ltf;
      const frontTopRight = projected.rtf;
      const frontBottomLeft = projected.lbf;
      const frontBottomRight = projected.rbf;
      const segments = Math.min(18, node.count);
      for (let segment = 1; segment < segments; segment++) {
        const ratio = segment / segments;
        const interpolate = (topPoint, bottomPoint) => [
          x + topPoint[0] + (bottomPoint[0] - topPoint[0]) * ratio,
          centerY + topPoint[1] + (bottomPoint[1] - topPoint[1]) * ratio
        ];
        const leftPoint = interpolate(frontTopLeft, frontBottomLeft);
        const rightPoint = interpolate(frontTopRight, frontBottomRight);
        markup += `<path class="vector-segment" d="M${leftPoint[0] + 4} ${leftPoint[1]}L${rightPoint[0] - 4} ${rightPoint[1]}"/>`;
      }
      markup += `<rect class="layer-type-pill" x="${x - 53}" y="42" width="106" height="21" rx="7"/>`;
      markup += labelMarkup(node, x, top + height + 34, 57);
    });
    return markup;
  }

  function renderCubes(nodes, positions) {
    let markup = "";
    nodes.slice(0, -1).forEach((node, index) => {
      const from = positions[index];
      const to = positions[index + 1];
      markup += `<path class="edge cube-connection" fill="none" marker-end="url(#connection-arrow)" d="M${from.x + from.width / 2 + from.depth / 2} ${from.y} C${from.x + from.width / 2 + from.depth / 2 + 35} ${from.y},${to.x - to.width / 2 - 35} ${to.y},${to.x - to.width / 2 - from.depth / 2} ${to.y}"/>`;
      if (nodes[index + 1].type === "residual" && index > 0) {
        const skipStart = positions[index - 1].x + positions[index - 1].width / 2;
        const skipEnd = to.x - to.width / 2;
        markup += `<path class="residual-special" d="M${skipStart} ${to.y}C${skipStart + 25} ${to.y - 115},${skipEnd - 25} ${to.y - 115},${skipEnd} ${to.y}"/>`;
      }
    });
    nodes.forEach((node, index) => {
      const position = positions[index];
      const { x, y, width, height, depth } = position;
      const { projected, visibleFaces } = projectBox(x, y, width, height, depth, cubeRotationX, cubeRotationY);
      if (node.type === "conv" && index > 0) markup += renderConvolutionMembrane(positions[index - 1], position);
      visibleFaces.forEach(face => {
        const points = face.keys.map(key => `${x + projected[key][0]},${y + projected[key][1]}`).join(" ");
        markup += `<polygon class="cube-face cube-${face.kind} ${node.category}" points="${points}"/>`;
      });
      markup += renderSpecialLayer(node, position, index);
      markup += `<rect class="layer-type-pill" x="${x - 53}" y="43" width="106" height="21" rx="7"/>`;
      markup += labelMarkup(node, x, y + height / 2 + depth / 2 + 34, 58);
    });
    return markup;
  }

  function renderConvolutionMembrane(previous, current) {
    const startX = previous.x + previous.width / 2 + previous.depth / 2;
    const endX = current.x - current.width / 2 - current.depth / 2;
    const startHalfHeight = Math.min(115, previous.height * .38);
    const endHalfHeight = Math.min(90, current.height * .34);
    const upperLeft = center => center.y - (center.height > 0 ? Math.min(115, center.height * .38) : 90);
    const lowerLeft = center => center.y + (center.height > 0 ? Math.min(115, center.height * .38) : 90);
    const upperRight = current.y - Math.min(90, current.height * .34);
    const lowerRight = current.y + Math.min(90, current.height * .34);
    const leftCenter = previous.y;
    const leftTop = upperLeft(previous);
    const leftBottom = lowerLeft(previous);
    const topPath = `M${startX} ${leftTop} C${startX + 30} ${leftTop},${endX - 30} ${upperRight},${endX} ${upperRight}`;
    const bottomPath = `M${startX} ${leftBottom} C${startX + 30} ${leftBottom},${endX - 30} ${lowerRight},${endX} ${lowerRight}`;
    let markup = `<path class="conv-membrane" d="${topPath} L${endX} ${lowerRight} C${endX - 30} ${lowerRight},${startX + 30} ${leftBottom},${startX} ${leftBottom} Z"/>`;
    const slices = 7;
    for (let slice = 0; slice <= slices; slice++) {
      const ratio = slice / slices;
      const x = startX + (endX - startX) * ratio;
      const halfHeight = startHalfHeight + (endHalfHeight - startHalfHeight) * ratio;
      const y = leftCenter + (current.y - leftCenter) * ratio;
      markup += `<path class="conv-membrane-grid" d="M${x} ${y - halfHeight}L${x} ${y + halfHeight}"/>`;
    }
    for (const offset of [-.65, 0, .65]) {
      const startY = leftCenter + startHalfHeight * offset;
      const endY = current.y + endHalfHeight * offset;
      const curve = Math.max(12, (endX - startX) * .42);
      markup += `<path class="conv-membrane-grid" d="M${startX} ${startY} C${startX + curve} ${startY},${endX - curve} ${endY},${endX} ${endY}"/>`;
    }
    markup += `<text class="special-label" x="${(startX + endX) / 2}" y="${Math.min(leftTop, upperRight) - 7}" text-anchor="middle">${escapeXml(language === "zh" ? "卷积映射" : "CONV FEATURE MAP")}</text>`;
    return markup;
  }

  function renderSpecialLayer(node, position) {
    const { x, y, width, height } = position;
    const left = x - width * .37;
    const right = x + width * .37;
    const top = y - height * .32;
    const bottom = y + height * .32;
    const centerY = y;
    let markup = "";
    if (node.type === "conv") {
      const size = Math.min(24, width * .26, height * .16);
      markup += `<rect class="special-panel" x="${x - size / 2}" y="${centerY - size / 2}" width="${size}" height="${size}" rx="3"/>`;
      markup += `<path class="special-mark" d="M${x - size / 6} ${centerY - size / 2}V${centerY + size / 2}M${x + size / 6} ${centerY - size / 2}V${centerY + size / 2}M${x - size / 2} ${centerY - size / 6}H${x + size / 2}M${x - size / 2} ${centerY + size / 6}H${x + size / 2}"/>`;
      markup += `<text class="special-label" x="${x}" y="${centerY + size + 12}" text-anchor="middle">${escapeXml(node.params?.kernelSize ?? "3×3")}</text>`;
    } else if (node.type === "pool") {
      const mid = centerY + 5;
      markup += `<path class="pool-funnel" d="M${left} ${top + 15}H${right}L${x + 14} ${mid}H${x - 14}Z"/>`;
      markup += `<path class="special-mark" d="M${x} ${top + 22}V${mid - 7}M${x - 5} ${mid - 12}L${x} ${mid - 7}L${x + 5} ${mid - 12}"/>`;
      markup += `<text class="special-label" x="${x}" y="${mid + 17}" text-anchor="middle">${escapeXml(node.params?.poolSize ?? "2×2")}</text>`;
    } else if (node.type === "attention") {
      const columns = Math.max(2, Math.min(4, Number(node.params?.heads) || 4));
      const rows = 3;
      const cellWidth = Math.min(13, (right - left) / columns);
      const cellHeight = Math.min(13, (bottom - top) / rows);
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          markup += `<rect class="attention-head" x="${x - columns * cellWidth / 2 + column * cellWidth + 1}" y="${centerY - rows * cellHeight / 2 + row * cellHeight + 1}" width="${cellWidth - 3}" height="${cellHeight - 3}" rx="2"/>`;
        }
      }
      markup += `<text class="special-label" x="${x}" y="${centerY + rows * cellHeight / 2 + 14}" text-anchor="middle">${escapeXml(`${node.params?.heads ?? 8} ${language === "zh" ? "头" : "heads"}`)}</text>`;
    } else if (node.type === "recurrent") {
      markup += `<path class="recurrent-loop" d="M${left + 6} ${centerY + 5}C${left - 10} ${centerY - 38},${right + 10} ${centerY - 38},${right - 6} ${centerY + 5}"/>`;
      markup += `<path class="special-mark" d="M${right - 10} ${centerY - 1}L${right - 5} ${centerY + 6}L${right - 14} ${centerY + 7}"/>`;
      markup += `<text class="special-label" x="${x}" y="${centerY + 29}" text-anchor="middle">${escapeXml(node.activation || "LSTM")}</text>`;
    } else if (node.type === "residual") {
      markup += `<path class="residual-special" d="M${left + 8} ${centerY + 34}C${left - 14} ${centerY - 46},${right + 14} ${centerY - 46},${right - 8} ${centerY + 34}"/>`;
      markup += `<text class="special-label" x="${x}" y="${centerY - 36}" text-anchor="middle">+ ${escapeXml(node.params?.blocks ?? 2)}</text>`;
    } else if (node.type === "upsample") {
      for (let arrow = -1; arrow <= 1; arrow++) {
        const startX = x + arrow * 12;
        const endX = x + arrow * 20;
        markup += `<path class="upsample-mark" d="M${startX} ${centerY + 19}V${centerY - 19}M${startX - 4} ${centerY - 14}L${startX} ${centerY - 20}L${startX + 4} ${centerY - 14}"/>`;
        if (arrow !== 0) markup += `<path class="upsample-mark" d="M${x} ${centerY + 19}L${endX} ${centerY - 12}"/>`;
      }
      markup += `<text class="special-label" x="${x}" y="${centerY + 34}" text-anchor="middle">×${escapeXml(node.params?.scale ?? 2)}</text>`;
    } else if (node.type === "norm") {
      for (let band = 0; band < 4; band++) {
        const bandY = centerY - 24 + band * 16;
        markup += `<path class="norm-band" d="M${left + 10} ${bandY}H${right - 10}"/>`;
      }
      markup += `<text class="special-label" x="${x}" y="${centerY + 47}" text-anchor="middle">ε ${escapeXml(node.params?.epsilon ?? "1e-5")}</text>`;
    } else if (node.type === "dropout") {
      const dots = 9;
      for (let dot = 0; dot < dots; dot++) {
        const dotX = x + (dot % 3 - 1) * 15;
        const dotY = centerY + (Math.floor(dot / 3) - 1) * 15;
        markup += `<circle class="${dot % 3 === 1 ? "dropout-node off" : "dropout-node"}" cx="${dotX}" cy="${dotY}" r="4"/>`;
      }
      markup += `<text class="special-label" x="${x}" y="${centerY + 37}" text-anchor="middle">p = ${escapeXml(node.params?.rate ?? 0.2)}</text>`;
    } else if (node.type === "embedding") {
      const tokens = 5;
      for (let token = 0; token < tokens; token++) {
        markup += `<rect class="embedding-token" x="${x - 31 + token * 14}" y="${centerY - 21}" width="10" height="42" rx="3"/>`;
      }
      markup += `<text class="special-label" x="${x}" y="${centerY + 34}" text-anchor="middle">${escapeXml(node.params?.vocabSize ?? "vocab")}</text>`;
    } else if (node.type === "latent" || node.type === "sampling") {
      markup += `<circle class="latent-node" cx="${x}" cy="${centerY}" r="17"/>`;
      markup += `<text class="special-label" x="${x}" y="${centerY + 4}" text-anchor="middle">${node.type === "latent" ? "z" : "ε"}</text>`;
      if (node.type === "sampling") markup += `<text class="special-label" x="${x}" y="${centerY + 34}" text-anchor="middle">${escapeXml(node.params?.method ?? "sample")}</text>`;
    }
    return markup;
  }

  function renderDiagram() {
    const nodes = [
      { name: t("input"), type: "input", shape: model.input.shape, category: "input", count: neuronCount(null, true) },
      ...model.layers.map((layer, index) => ({ ...layer, category: layerCategory(layer, index), count: neuronCount(layer) }))
    ];
    const stepX = activeView === "deep" ? 190 : 170;
    const offsetX = 92;
    const width = Math.max(viewport.clientWidth, offsetX * 2 + nodes.length * stepX);
    const height = activeView === "flat" ? 590 : 760;
    const centerY = activeView === "flat" ? 275 : 270;
    const positions = nodes.map((node, index) => {
      const x = offsetX + index * stepX;
      if (activeView === "flat") {
        const availableHeight = 430;
        const visibleCount = Math.min(node.count, 20000);
        const spacing = availableHeight / (visibleCount + 1);
        const radius = Math.max(.45, Math.min(8, spacing * .38));
        const ys = Array.from({ length: visibleCount }, (_, neuron) => centerY + (neuron - (visibleCount - 1) / 2) * spacing);
        return { x, ys, radius, top: ys[0] - radius, bottom: ys[ys.length - 1] + radius };
      }
      if (activeView === "3d") {
        const plateHeight = Math.min(350, 190 + Math.log2(node.count + 1) * 13);
        return { x, width: 76, depth: 19, height: plateHeight, top: centerY - plateHeight / 2 };
      }
      const dimensions = node.type === "input" ? inputDimensions() : shapeDimensions(node.shape || "");
      const channelIndex = channelDimensionIndex(dimensions);
      const hasSpatialShape = channelIndex >= 0;
      const spatialProduct = hasSpatialShape
        ? dimensions.reduce((product, dimension, index) => index === channelIndex ? product : product * dimension, 1)
        : 0;
      const spatialSize = hasSpatialShape ? Math.sqrt(spatialProduct) : node.count;
      const channelSize = hasSpatialShape ? dimensions[channelIndex] : node.count;
      const cubeHeight = Math.max(130, Math.min(250, 85 + Math.log2(spatialSize + 1) * 17));
      const cubeWidth = Math.max(74, Math.min(140, 58 + Math.log2(spatialSize + 1) * 5));
      const cubeDepth = Math.max(20, Math.min(48, 12 + Math.log2(channelSize + 1) * 3));
      return { x, width: cubeWidth, depth: cubeDepth, height: cubeHeight, y: centerY };
    });
    let markup = `<defs><marker id="connection-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#9ba5b8"/></marker></defs>`;
    if (activeView === "flat") markup += renderPlane(nodes, positions, centerY);
    else if (activeView === "3d") markup += renderVectorPlates(nodes, positions, centerY);
    else markup += renderCubes(nodes, positions);

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("class", `view-${activeView}`);
    svg.setAttribute("aria-label", `${model.name} neural network diagram`);
    svg.innerHTML = markup;
    document.getElementById("summary-name").textContent = model.name;
    document.getElementById("layer-count").textContent = nodes.length;
    document.getElementById("parameter-count").textContent = formatCount(estimateParameters(model));
    viewport.classList.toggle("rotatable", activeView !== "flat");
    const resetRotation = document.getElementById("reset-rotation");
    resetRotation.hidden = activeView === "flat";
    resetRotation.style.display = activeView === "flat" ? "none" : "grid";
    resetRotation.title = t("resetRotation");
    resetRotation.setAttribute("aria-label", activeView === "deep" ? t("resetCubeRotation") : t("resetPlateRotation"));
    document.getElementById("canvas-hint").textContent = activeView === "3d" ? t("rotatePlateHint") : activeView === "deep" ? t("rotateCubeHint") : t("canvasHint");
    updateCanvasTransform();
  }

  function updateCanvasTransform() {
    svg.style.transform = `scale(${zoom})`;
    svg.style.transformOrigin = "top left";
  }

  function resetActiveRotation() {
    if (activeView === "3d") {
      rotationX = -14;
      rotationY = 22;
      renderDiagram();
    } else if (activeView === "deep") {
      cubeRotationX = -18;
      cubeRotationY = 24;
      renderDiagram();
    }
  }

  function estimateParameters(network) {
    const inputDimensions = network.input.shape.split(/[×x* ]+/).map(Number).filter(value => Number.isFinite(value) && value > 0);
    let previousUnits = inputDimensions.reduce((product, value) => product * value, 1) || 0;
    let total = 0;
    for (const layer of network.layers) {
      const units = Number(layer.units) || 0;
      if (layer.type === "dense" && previousUnits > 0 && units > 0) total += (previousUnits + 1) * units;
      if (units > 0) previousUnits = units;
    }
    return total;
  }

  function renderVisualEditor() {
    const nameLabel = escapeXml(t("modelName"));
    const inputLabel = escapeXml(t("inputShape"));
    const rows = model.layers.map((layer, index) => {
      const options = layerTypes.map(type => `<option value="${type}"${layer.type === type ? " selected" : ""}>${escapeXml(t("types")[type])}</option>`).join("");
      const parameterFields = (layerParameterFields[layer.type] || []).map(field => {
        const value = layer.params?.[field.key] ?? field.defaultValue;
        const step = field.step ? ` step="${field.step}"` : "";
        const min = field.type === "number" ? ' min="0"' : "";
        return `<label>${escapeXml(translations[language].parameterLabels[field.key])}<input class="layer-field" data-param="${field.key}" type="${field.type}"${min}${step} value="${escapeXml(value)}"></label>`;
      }).join("");
      return `<div class="layer-row" data-layer-index="${index}">
        <div class="layer-row-head"><span class="layer-row-title">${escapeXml(t("layer"))} ${index + 1}</span><button class="small-button remove-layer" type="button" data-index="${index}" aria-label="${escapeXml(t("removeLayer"))}" title="${escapeXml(t("removeLayer"))}">×</button></div>
        <div class="layer-row-fields">
          <label class="wide">${escapeXml(t("layerName"))}<input class="layer-field" data-field="name" value="${escapeXml(layer.name)}"></label>
          <label>${escapeXml(t("layerType"))}<select class="layer-field" data-field="type">${options}</select></label>
          <label>${escapeXml(t("neurons"))}<input class="layer-field" data-field="units" type="number" min="1" value="${escapeXml(layer.units || "")}"></label>
          <label>${escapeXml(t("activation"))}<input class="layer-field" data-field="activation" value="${escapeXml(layer.activation || "")}"></label>
          <label>${escapeXml(t("outputShape"))}<input class="layer-field" data-field="shape" value="${escapeXml(layer.shape || "")}"></label>
          ${parameterFields}
        </div>
      </div>`;
    }).join("");
    visualEditor.innerHTML = `<div class="model-fields">
      <label>${nameLabel}<input class="layer-field" data-model-field="name" value="${escapeXml(model.name)}"></label>
      <label>${inputLabel}<input class="layer-field" data-model-field="inputShape" value="${escapeXml(model.input.shape)}"></label>
    </div><div class="layer-list">${rows}</div><button class="add-button" id="add-layer" type="button">${escapeXml(t("addLayer"))}</button>`;
  }

  function updatePresetOptions(selected = "") {
    const previous = selected || presetSelect.value;
    const options = Object.keys(presets).map(key => `<option value="${key}">${escapeXml(t(presetKeys[key]))}</option>`).join("");
    presetSelect.innerHTML = `${options}<option value="custom">${escapeXml(t("modelCustom"))}</option>`;
    presetSelect.value = presets[previous] ? previous : "custom";
  }

  function applyLanguage() {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;
      if (translations[language][key]) element.textContent = translations[language][key];
    });
    document.getElementById("language-toggle").textContent = language === "zh" ? "EN" : "中";
    document.getElementById("language-toggle").title = language === "zh" ? "Switch to English" : "切换到中文";
    document.getElementById("zoom-in").title = t("zoomIn");
    document.getElementById("zoom-out").title = t("zoomOut");
    updatePresetOptions();
    renderVisualEditor();
    renderDiagram();
  }

  function parseArchitecture(source) {
    try {
      return validateArchitecture(JSON.parse(source));
    } catch (error) {
      showError(`${error instanceof SyntaxError ? t("invalidJson") : t("invalidModel")}${error.message}`);
      return null;
    }
  }

  function applyArchitecture() {
    if (activeEditor === "json") {
      const parsed = parseArchitecture(input.value);
      if (!parsed) return;
      model = parsed;
      presetSelect.value = "custom";
    } else {
      try {
        validateArchitecture(model);
      } catch (error) {
        showError(`${t("invalidModel")}${error.message}`);
        return;
      }
    }
    clearError();
    syncJsonEditor();
    renderVisualEditor();
    renderDiagram();
    showToast(t("applied"));
  }

  function setArchitecture(next, preset = "custom") {
    model = validateArchitecture(structuredClone(next));
    presetSelect.value = presets[preset] ? preset : "custom";
    syncJsonEditor();
    renderVisualEditor();
    renderDiagram();
    clearError();
  }

  function* protobufFields(bytes) {
    let offset = 0;
    const readVarint = () => {
      let result = 0n;
      let shift = 0n;
      for (let count = 0; count < 10; count++) {
        if (offset >= bytes.length) throw new Error("protobuf 数据不完整");
        const byte = bytes[offset++];
        result |= BigInt(byte & 0x7f) << shift;
        if ((byte & 0x80) === 0) return result;
        shift += 7n;
      }
      throw new Error("protobuf varint 无效");
    };
    while (offset < bytes.length) {
      const tag = Number(readVarint());
      const field = tag >>> 3;
      const wire = tag & 7;
      if (!field) throw new Error("protobuf 字段编号无效");
      if (wire === 0) {
        yield { field, wire, value: readVarint() };
      } else if (wire === 1) {
        if (offset + 8 > bytes.length) throw new Error("protobuf 数据不完整");
        offset += 8;
      } else if (wire === 2) {
        const length = Number(readVarint());
        if (!Number.isSafeInteger(length) || length < 0 || offset + length > bytes.length) throw new Error("protobuf 字段长度无效");
        yield { field, wire, bytes: bytes.subarray(offset, offset + length) };
        offset += length;
      } else if (wire === 5) {
        if (offset + 4 > bytes.length) throw new Error("protobuf 数据不完整");
        offset += 4;
      } else {
        throw new Error(`不支持的 protobuf wire type: ${wire}`);
      }
    }
  }

  function decodeProtoString(bytes) {
    return new TextDecoder().decode(bytes);
  }

  function protoShape(bytes) {
    const dimensions = [];
    for (const field of protobufFields(bytes)) {
      if (field.field !== 1 || field.wire !== 2) continue;
      let dimension = "?";
      for (const part of protobufFields(field.bytes)) {
        if (part.wire === 0 && part.field === 1) {
          const value = Number(part.value);
          dimension = Number.isSafeInteger(value) ? String(value) : part.value.toString();
        } else if (part.wire === 2 && part.field === 2) {
          dimension = decodeProtoString(part.bytes) || "?";
        }
      }
      dimensions.push(dimension);
    }
    return dimensions;
  }

  function protoValueInfo(bytes) {
    let name = "";
    let shape = [];
    for (const field of protobufFields(bytes)) {
      if (field.field === 1 && field.wire === 2) name = decodeProtoString(field.bytes);
      if (field.field !== 2 || field.wire !== 2) continue;
      for (const typeField of protobufFields(field.bytes)) {
        if (typeField.field !== 1 || typeField.wire !== 2) continue;
        for (const tensorField of protobufFields(typeField.bytes)) {
          if (tensorField.field === 2 && tensorField.wire === 2) shape = protoShape(tensorField.bytes);
        }
      }
    }
    return { name, shape };
  }

  function protoTensorName(bytes) {
    for (const field of protobufFields(bytes)) if (field.field === 8 && field.wire === 2) return decodeProtoString(field.bytes);
    return "";
  }

  function protoNode(bytes) {
    const node = { name: "", opType: "", inputs: [], outputs: [] };
    for (const field of protobufFields(bytes)) {
      if (field.wire !== 2) continue;
      if (field.field === 1) node.inputs.push(decodeProtoString(field.bytes));
      else if (field.field === 2) node.outputs.push(decodeProtoString(field.bytes));
      else if (field.field === 3) node.name = decodeProtoString(field.bytes);
      else if (field.field === 4) node.opType = decodeProtoString(field.bytes);
    }
    return node;
  }

  function shapeLabel(dimensions) {
    return dimensions.length ? dimensions.join(" × ") : "";
  }

  function onnxArchitecture(bytes, filename) {
    let graphBytes;
    for (const field of protobufFields(bytes)) {
      if (field.field === 7 && field.wire === 2) {
        graphBytes = field.bytes;
        break;
      }
    }
    if (!graphBytes) throw new Error("ModelProto 中未找到 graph");
    const graph = { name: "", nodes: [], inputs: [], outputs: [], valueInfos: [], initializers: [] };
    for (const field of protobufFields(graphBytes)) {
      if (field.wire !== 2) continue;
      if (field.field === 1) graph.nodes.push(protoNode(field.bytes));
      else if (field.field === 2) graph.name = decodeProtoString(field.bytes);
      else if (field.field === 5) graph.initializers.push(protoTensorName(field.bytes));
      else if (field.field === 11) graph.inputs.push(protoValueInfo(field.bytes));
      else if (field.field === 12) graph.outputs.push(protoValueInfo(field.bytes));
      else if (field.field === 13) graph.valueInfos.push(protoValueInfo(field.bytes));
    }
    if (!graph.nodes.length) throw new Error(t("onnxNoGraph"));
    const knownValues = [...graph.inputs, ...graph.outputs, ...graph.valueInfos];
    const shapesByName = new Map(knownValues.filter(value => value.name).map(value => [value.name, value.shape]));
    const initializerNames = new Set(graph.initializers);
    const modelInput = graph.inputs.find(value => !initializerNames.has(value.name)) || graph.inputs[0];
    const layers = graph.nodes.map((node, index) => {
      const op = node.opType || "Operator";
      const lower = op.toLowerCase();
      const type = /conv/.test(lower) ? "conv"
        : /pool/.test(lower) ? "pool"
          : /attention/.test(lower) ? "attention"
            : /normalization|batchnorm|layernorm/.test(lower) ? "norm"
              : /embedding/.test(lower) ? "embedding"
                : /^(gemm|matmul|linear)$/.test(lower) ? "dense"
                  : lower;
      const outputShape = node.outputs.map(name => shapesByName.get(name)).find(shape => shape && shape.length) || [];
      const lastDimension = outputShape.length && type === "dense" ? Number(outputShape[outputShape.length - 1]) : 0;
      return {
        name: node.name || op || `Node ${index + 1}`,
        type,
        ...(shapeLabel(outputShape) ? { shape: shapeLabel(outputShape) } : {}),
        ...(Number.isSafeInteger(lastDimension) && lastDimension > 0 ? { units: lastDimension } : {})
      };
    });
    return validateArchitecture({
      name: (graph.name || filename.replace(/\.onnx$/i, "") || "ONNX Model").slice(0, 100),
      input: { shape: modelInput ? shapeLabel(modelInput.shape) || "?" : "?" },
      layers
    });
  }

  async function importOnnxFile(file) {
    if (!file) return;
    if (file.size > 256 * 1024 * 1024) {
      showError(t("onnxTooLarge"));
      return;
    }
    const importButton = document.getElementById("import-onnx");
    importButton.disabled = true;
    clearError();
    try {
      setArchitecture(onnxArchitecture(new Uint8Array(await file.arrayBuffer()), file.name));
      showToast(t("onnxImported"));
    } catch (error) {
      console.error("ONNX import failed:", error);
      showError(`${t("onnxInvalid")}${error.message}`);
    } finally {
      importButton.disabled = false;
      document.getElementById("onnx-file").value = "";
    }
  }

  function svgExportColor(value) {
    const match = value.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\)$/);
    if (!match) return value;
    const channels = match.slice(1, 4).map(channel => Math.round(Math.max(0, Math.min(1, Number(channel))) * 255));
    return match[4]
      ? `rgba(${channels.join(", ")}, ${Number(match[4])})`
      : `rgb(${channels.join(", ")})`;
  }

  function inlineSvgStyles(source, destination) {
    const properties = [
      "fill", "fill-opacity", "fill-rule", "stroke", "stroke-opacity", "stroke-width",
      "stroke-linecap", "stroke-linejoin", "stroke-dasharray", "stroke-dashoffset",
      "opacity", "font-family", "font-size", "font-style", "font-weight",
      "letter-spacing", "text-anchor", "dominant-baseline", "marker-end"
    ];
    const sourceElements = [source, ...source.querySelectorAll("*")];
    const destinationElements = [destination, ...destination.querySelectorAll("*")];
    sourceElements.forEach((element, index) => {
      const computed = getComputedStyle(element);
      const inlineStyles = properties.map(property => {
        const value = computed.getPropertyValue(property);
        const compatibleValue = ["fill", "stroke"].includes(property) ? svgExportColor(value) : value;
        return `${property}:${compatibleValue}`;
      }).join(";");
      destinationElements[index].setAttribute("style", inlineStyles);
    });
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function exportDiagram(format) {
    try {
      const clone = svg.cloneNode(true);
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const bounds = svg.getBBox();
      const padding = 32;
      const exportBounds = {
        x: Math.floor(bounds.x - padding),
        y: Math.floor(bounds.y - padding),
        width: Math.ceil(bounds.width + padding * 2),
        height: Math.ceil(bounds.height + padding * 2)
      };
      clone.setAttribute("viewBox", `${exportBounds.x} ${exportBounds.y} ${exportBounds.width} ${exportBounds.height}`);
      clone.setAttribute("width", exportBounds.width);
      clone.setAttribute("height", exportBounds.height);
      inlineSvgStyles(svg, clone);
      const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      background.setAttribute("x", String(exportBounds.x));
      background.setAttribute("y", String(exportBounds.y));
      background.setAttribute("width", String(exportBounds.width));
      background.setAttribute("height", String(exportBounds.height));
      background.setAttribute("fill", getComputedStyle(document.body).getPropertyValue("--canvas").trim());
      clone.insertBefore(background, clone.firstChild);
      const source = new XMLSerializer().serializeToString(clone);
      const filename = model.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "neural-network";
      if (format === "svg") {
        downloadBlob(new Blob([source], { type: "image/svg+xml;charset=utf-8" }), `${filename}.svg`);
        showToast(t("svgDone"));
        return;
      }
      const image = new Image();
      const objectUrl = URL.createObjectURL(new Blob([source], { type: "image/svg+xml;charset=utf-8" }));
      image.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = exportBounds.width * 2;
          canvas.height = exportBounds.height * 2;
          const context = canvas.getContext("2d");
          if (!context) throw new Error("Canvas 2D context is unavailable");
          context.scale(2, 2);
          context.fillStyle = getComputedStyle(document.body).getPropertyValue("--canvas").trim();
          context.fillRect(0, 0, canvas.width / 2, canvas.height / 2);
          context.drawImage(image, 0, 0);
          canvas.toBlob(blob => {
            URL.revokeObjectURL(objectUrl);
            if (!blob) {
              showToast(t("exportFailed"));
              return;
            }
            downloadBlob(blob, `${filename}.png`);
            showToast(t("pngDone"));
          }, "image/png");
        } catch (error) {
          URL.revokeObjectURL(objectUrl);
          console.error("PNG export failed:", error);
          showToast(t("exportFailed"));
        }
      };
      image.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        showToast(t("exportFailed"));
      };
      image.src = objectUrl;
    } catch (error) {
      console.error("Diagram export failed:", error);
      showToast(t("exportFailed"));
    }
  }

  function setEditorMode(nextMode) {
    if (nextMode === activeEditor) return;
    if (activeEditor === "json") {
      const parsed = parseArchitecture(input.value);
      if (!parsed) return;
      model = parsed;
      presetSelect.value = "custom";
    }
    activeEditor = nextMode;
    jsonEditor.classList.toggle("hidden", nextMode !== "json");
    visualEditor.classList.toggle("active", nextMode === "visual");
    document.querySelectorAll(".mode-button").forEach(button => {
      const selected = button.dataset.mode === nextMode;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-selected", String(selected));
    });
    syncJsonEditor();
    renderVisualEditor();
    renderDiagram();
    clearError();
  }

  function updateFromVisualField(target) {
    const row = target.closest(".layer-row");
    const field = target.dataset.field;
    if (row && target.dataset.param) {
      const layer = model.layers[Number(row.dataset.layerIndex)];
      const definition = (layerParameterFields[layer.type] || []).find(item => item.key === target.dataset.param);
      if (!definition) return;
      layer.params ||= {};
      if (target.value === "") delete layer.params[target.dataset.param];
      else layer.params[target.dataset.param] = definition.type === "number" ? Number(target.value) : target.value;
      if (!Object.keys(layer.params).length) delete layer.params;
    } else if (row && field) {
      const layer = model.layers[Number(row.dataset.layerIndex)];
      if (field === "units") {
        if (target.value === "") delete layer.units;
        else layer.units = Number(target.value);
      } else if (field === "type") {
        layer.type = target.value;
        const defaults = layerParameterFields[layer.type] || [];
        if (defaults.length) layer.params = Object.fromEntries(defaults.map(parameter => [parameter.key, parameter.defaultValue]));
        else delete layer.params;
      } else if (target.value === "") {
        delete layer[field];
      } else {
        layer[field] = target.value;
      }
    } else if (target.dataset.modelField === "name") {
      model.name = target.value;
    } else if (target.dataset.modelField === "inputShape") {
      model.input.shape = target.value;
    }
    presetSelect.value = "custom";
    syncJsonEditor();
    renderDiagram();
  }

  function initialize() {
    updatePresetOptions("mlp");
    renderVisualEditor();
    syncJsonEditor();
    renderDiagram();

    presetSelect.addEventListener("change", () => {
      const key = presetSelect.value;
      if (presets[key]) {
        setArchitecture(presets[key], key);
        showToast(t("presetLoaded"));
      }
    });

    visualEditor.addEventListener("input", event => {
      if (event.target.matches("[data-field], [data-param], [data-model-field]")) updateFromVisualField(event.target);
    });
    visualEditor.addEventListener("change", event => {
      if (event.target.matches("[data-field], [data-param], [data-model-field]")) {
        updateFromVisualField(event.target);
        if (event.target.matches('[data-field="type"]')) renderVisualEditor();
      }
    });
    visualEditor.addEventListener("click", event => {
      const removeButton = event.target.closest(".remove-layer");
      if (removeButton) {
        model.layers.splice(Number(removeButton.dataset.index), 1);
        if (!model.layers.length) model.layers.push({ name: "Dense", type: "dense", units: 10, activation: "ReLU" });
        presetSelect.value = "custom";
        renderVisualEditor();
        syncJsonEditor();
        renderDiagram();
        return;
      }
      if (event.target.closest("#add-layer")) {
        model.layers.push({ name: "Dense", type: "dense", units: 64, activation: "ReLU" });
        presetSelect.value = "custom";
        renderVisualEditor();
        syncJsonEditor();
        renderDiagram();
      }
    });

    document.getElementById("apply-architecture").addEventListener("click", applyArchitecture);
    document.getElementById("import-onnx").addEventListener("click", () => document.getElementById("onnx-file").click());
    document.getElementById("onnx-file").addEventListener("change", event => importOnnxFile(event.target.files[0]));
    document.querySelectorAll(".mode-button").forEach(button => button.addEventListener("click", () => setEditorMode(button.dataset.mode)));
    document.querySelectorAll(".view-button").forEach(button => button.addEventListener("click", () => {
      activeView = button.dataset.view;
      document.querySelectorAll(".view-button").forEach(item => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      renderDiagram();
    }));

    document.getElementById("language-toggle").addEventListener("click", () => {
      language = language === "zh" ? "en" : "zh";
      applyLanguage();
    });
    document.getElementById("theme-toggle").addEventListener("click", () => {
      const dark = document.documentElement.dataset.theme !== "dark";
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      document.getElementById("theme-icon").innerHTML = dark
        ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>'
        : '<path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.6 8.6 0 1 0 20.2 15.4Z"/>';
      renderDiagram();
    });
    document.getElementById("export-toggle").addEventListener("click", () => document.getElementById("export-menu").classList.toggle("open"));
    document.querySelectorAll("[data-export]").forEach(button => button.addEventListener("click", () => {
      document.getElementById("export-menu").classList.remove("open");
      exportDiagram(button.dataset.export);
    }));
    document.addEventListener("click", event => {
      if (!event.target.closest(".export-wrap")) document.getElementById("export-menu").classList.remove("open");
    });
    document.getElementById("zoom-in").addEventListener("click", () => { zoom = Math.min(1.6, zoom + .1); renderDiagram(); });
    document.getElementById("zoom-out").addEventListener("click", () => { zoom = Math.max(.6, zoom - .1); renderDiagram(); });
    document.getElementById("fit-view").addEventListener("click", () => { zoom = 1; renderDiagram(); showToast(t("fit")); });
    document.getElementById("reset-rotation").addEventListener("click", () => resetActiveRotation());
    viewport.addEventListener("pointerdown", event => {
      if (activeView === "flat" || (event.pointerType === "mouse" && event.button !== 0)) return;
      pointerPosition = { id: event.pointerId, x: event.clientX, y: event.clientY };
      viewport.classList.add("dragging");
      viewport.setPointerCapture(event.pointerId);
      event.preventDefault();
    });
    viewport.addEventListener("pointermove", event => {
      if (!pointerPosition || pointerPosition.id !== event.pointerId) return;
      const deltaX = event.clientX - pointerPosition.x;
      const deltaY = event.clientY - pointerPosition.y;
      pointerPosition.x = event.clientX;
      pointerPosition.y = event.clientY;
      if (activeView === "3d") {
        rotationY = ((rotationY + deltaX * .55 + 180) % 360 + 360) % 360 - 180;
        rotationX = Math.max(-75, Math.min(75, rotationX - deltaY * .45));
        renderDiagram();
      } else if (activeView === "deep") {
        cubeRotationY = ((cubeRotationY + deltaX * .55 + 180) % 360 + 360) % 360 - 180;
        cubeRotationX = Math.max(-75, Math.min(75, cubeRotationX - deltaY * .45));
        renderDiagram();
      }
    });
    const stopRotation = event => {
      if (!pointerPosition || pointerPosition.id !== event.pointerId) return;
      pointerPosition = null;
      viewport.classList.remove("dragging");
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    };
    viewport.addEventListener("pointerup", stopRotation);
    viewport.addEventListener("pointercancel", stopRotation);
    viewport.addEventListener("lostpointercapture", event => {
      if (pointerPosition?.id === event.pointerId) {
        pointerPosition = null;
        viewport.classList.remove("dragging");
      }
    });
    viewport.addEventListener("dblclick", () => {
      if (activeView === "flat") return;
      resetActiveRotation();
    });
    window.addEventListener("resize", renderDiagram);
  }

  initialize();
})();
