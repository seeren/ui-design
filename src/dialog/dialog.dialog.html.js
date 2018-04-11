
export default (title, message, className) => {

    return `<div id="ui-dialog" class="ui dialog right grey-900 col-offset-1 col-10 col-offset-sm-5 col-sm-6 col-offset-lg-7 col-lg-4 col-offset-xl-9 col-xl-2 card card-24 ${ className }">
                <br /><h6 class="ui col-12 left normal">${ title }</h6>
                <p class="ui col-12 left hyphens lighter">${ message }</p>
            </div>`;

};