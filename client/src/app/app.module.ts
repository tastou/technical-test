import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { CicleSocialMediaComponent } from './shared/components/cicle-social-media/cicle-social-media.component';
import { SafeHtmlPipePipe } from './shared/pipes/safe-html-pipe.pipe';
import { AlbumListComponent } from './shared/components/album-list/album-list.component';
import { AlbumCardComponent } from './shared/components/album-card/album-card.component';
import { AlbumCardItemComponent } from './shared/components/album-card-item/album-card-item.component';
import { AlbumListItemComponent } from './shared/components/album-list-item/album-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent,
    AlbumsComponent,
    CicleSocialMediaComponent,
    SafeHtmlPipePipe,
    AlbumListComponent,
    AlbumCardComponent,
    AlbumCardItemComponent,
    AlbumListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
