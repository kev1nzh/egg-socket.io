'use strict';

module.exports = () => {
  return function* () {
    this.socket.emit('res', 'hello');
  };
};
