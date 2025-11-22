module.exports = (req, res, next) => {
   console.log('Sistema funcionando :D');
   return res.status(200).json({code: 1, message:'Sistema funcionando'});// mensaje de sistema funcionando
}