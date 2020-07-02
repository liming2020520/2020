export default class Utils{
    static ce(type,style){
        var elem=document.createElement(type);
        Object.assign(elem.style,style);
        return elem;
    }
}