module.exports = async (plugin) => {
  plugin.contentTypes.file.schema.attributes.base64 = {
    type: 'text', required: true
  };

  const adminUploadRoute = plugin.routes['admin'].routes.find(route => route.handler === 'admin-upload.upload');
  const uploadRoute = plugin.routes['content-api'].routes.find(route => route.handler === 'content-api.upload');
  uploadRoute.config = {middlewares: ['global::addBase64']};
  adminUploadRoute.config.middlewares = ['global::addBase64'];
 
  return plugin;
};