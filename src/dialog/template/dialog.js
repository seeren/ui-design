
export default (title, message, className) => {

    return `<div id="ui-dialog" class="ui dialog right grey-900 col-offset-1 col-10 col-offset-sm-6 col-sm-5 col-offset-lg-8 col-lg-3 col-offset-xl-9 col-xl-2 card card-24 ${ className }">
                <br /><h6 class="ui left normal">${ title }</h6>
                <p class="ui left hyphens lighter">${ message }</p>
            </div>`;

};