function Storage(){
  this.length = 0;
  this._storage = {};
}

Storage.prototype.getItem = function(key){
  return (key in this._storage) ? this._storage[key] : null;
};

Storage.prototype.setItem = function(key, val){
  if(!(key in this._storage)) this.length++;
  this._storage[key] = ''+val;
  //persist
};

Storage.prototype.removeItem = function(key){
  if(key in this._storage) this.length--;
  delete this._storage[key];
};

Storage.prototype.key = function(idx){
  return Object.keys(this._storage)[idx] || null;
};

Storage.prototype.clear = function(){
  var _this = this;
  Object.keys(this._storage).forEach(function(key){
    _this.removeItem(key);
  });
};

function create(){
  return new Storage();
}

module.exports = {
  create: create
};
