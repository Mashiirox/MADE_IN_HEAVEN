const { isBoolean } = require('lodash');

const plugins = {
  cleanupAttrs: true,
  removeDoctype: true,
  removeXMLProcInst: true,
  removeComments: true,
  removeMetadata: true,
  removeTitle: true,
  removeDesc: true,
  removeUselessDefs: true,
  removeEditorsNSData: true,
  removeEmptyAttrs: true,
  removeHiddenElems: true,
  removeEmptyText: true,
  removeEmptyContainers: true,
  removeViewBox: false,
  cleanupEnableBackground: true,
  convertStyleToAttrs: true,
  convertColors: true,
  convertPathData: true,
  convertTransform: true,
  removeUnknownsAndDefaults: true,
  removeNonInheritableGroupAttrs: true,
  removeUselessStrokeAndFill: true,
  removeUnusedNS: true,
  cleanupIDs: true,
  cleanupNumericValues: true,
  moveElemsAttrsToGroup: true,
  moveGroupAttrsToElems: true,
  collapseGroups: true,
  removeRasterImages: false,
  mergePaths: true,
  convertShapeToPath: true,
  sortAttrs: true,
  removeDimensions: true,
  removeAttrs: {
    attrs: [
      '(class|style)',
      'xlink:href',
      'aria-labelledby',
      'aria-describedby',
      'xmlns:xlink',
      'data-name',
      '(stroke)',
    ],
  },
  removeAttributesBySelector: {
    selectors: [{ selector: "[fill = 'none']", attributes: 'fill' }],
  },
};

module.exports = {
  multipass: false,
  plugins: Object.entries(plugins).map(([key, value]) => {
    if (isBoolean(value)) {
      return { name: key, active: value };
    }

    return {
      name: key,
      params: value,
    };
  }),
};
