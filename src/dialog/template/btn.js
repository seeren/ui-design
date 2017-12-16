
export default (text, className, cancel) => {
    
    return `<button class="ui btn ${ cancel ? `btn-flat ` : ``}btn-${ className }">${ text.toLowerCase() }</button>`;

};