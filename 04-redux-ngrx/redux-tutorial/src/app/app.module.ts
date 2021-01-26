import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { bankReducer } from './state/bank/bank.reducer';
import { DepositComponent } from './deposit.component';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    DepositComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      bank: bankReducer
    }),
    StoreDevtoolsModule.instrument(), // we can now examine our store
    EffectsModule.forRoot([]),
    HttpClientModule,
    EntityDataModule.forRoot({
      entityMetadata: {
        Task: {

        }
      }
    })
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        root: 'https://nztodo.herokuapp.com/api'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
