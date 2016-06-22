var src  = './develop';
var dest = './html';

module.exports = {

  src:  src,
  dest: dest,

  slim: {
    watch:  src  + '/slim/**/*.(slim|slimt)',
    src:    src  + '/slim/**/*.slim',
    dest:   dest + '',
  }
}
