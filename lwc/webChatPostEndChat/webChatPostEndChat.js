import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WebChatPostEndChat extends LightningElement {
    @api showModal;
    reasonOptions = [
        { label: 'Installation', value: 'Installation' },
        { label: 'Equipment', value: 'Equipment' },
        { label: 'Performance', value: 'Performance' },
        { label: 'Breakdown', value: 'Breakdown' },
        { label: 'Feedback', value: 'Feedback' }
    ]
    handleCancel() {
        this.showModal = false;
    }

    handleSave(){
        const event = new ShowToastEvent({
            title: 'Case Updated',
            variant: 'success'
        });
        this.dispatchEvent(event);

        this.showModal = false;
    }
}