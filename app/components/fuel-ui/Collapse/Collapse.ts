import {Component, Input} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
    selector: "collapse",
    templateUrl: './app/components/fuel-ui/Collapse/Collapse.html'
})


export class Collapse {
    @Input() buttonText: string;
    showCollapse: boolean = false;

    public toggleCollapse() : void{
        this.showCollapse = !this.showCollapse;
    }

}

export var COLLAPSE_PROVIDERS = [
    Collapse
];
