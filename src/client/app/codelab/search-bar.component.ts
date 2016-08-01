import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'search-bar',
    template: `
    <form>
        <input type="text" placeholder="search...">
        <p><input type="checkbox" (change)="onChangeStack($event)">Only show product stock</p>
    </form>
    `
})
export class SearchBarComponent {
    @Output() stocked: EventEmitter<any> = new EventEmitter()

    onChangeStack(e: any) {
        console.log('checked?', e.target.checked); //dom에서 method확인
        this.stocked.emit(e.target.checked); //이렇게 하면 값이 F.P.T로 올라감
    }
} 