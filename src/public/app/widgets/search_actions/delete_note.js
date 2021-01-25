import AbstractSearchAction from "./abstract_search_action.js";

const TPL = `
<tr>
    <td colspan="2">
        <span class="bx bx-trash"></span>
    
        Delete matched note
    </td>
    <td>
        <span class="bx bx-x icon-action" data-action-conf-del></span>
    </td>
</tr>`;

export default class DeleteNoteSearchAction extends AbstractSearchAction {
    static get actionName() { return "deleteNote"; }

    doRender() {
        return $(TPL);
    }
}
