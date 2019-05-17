import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatBadgeModule,
              MatButtonModule],
    exports: [MatBadgeModule,
              MatButtonModule]
})

export class MaterialModule {}
