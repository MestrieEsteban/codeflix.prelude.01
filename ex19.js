module.exports = function insert(str = '', toInsertPosition='', positionopt = 0) 
 {
    let finish = [str.slice(0, positionopt), toInsertPosition, str.slice(positionopt)].join('');

    return finish
 }
