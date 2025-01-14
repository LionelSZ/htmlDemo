/**
 * UUID 生成工具
 * 提供生成 UUID v4 的功能
 */
const UUID = {
  /**
   * 生成 UUID v4
   * @returns {string} UUID字符串
   */
  generate: function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
};

// 如果在浏览器环境，将 UUID 挂载到 window 对象
if (typeof window !== 'undefined') {
  window.UUID = UUID;
}

// 如果在 CommonJS 环境，导出 UUID
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UUID;
} 