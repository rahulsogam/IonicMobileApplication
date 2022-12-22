import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { PickupCallCardComponent } from "./pickup-call-card/pickup-call-card.component";
@NgModule({
    imports:[IonicModule,CommonModule],
    declarations:[PickupCallCardComponent],
    exports:[PickupCallCardComponent]
})

export class ComponentsModule{}