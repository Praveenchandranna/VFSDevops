import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track text ="world";

    handlechange(event){
        text = event.target.value;

    }

}