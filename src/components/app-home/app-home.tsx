import { Component, h } from '@stencil/core';
import { dasherize } from '../../helpers/dasherize';

import recentlyPlayed from "../../assets/mockdata/recentlyPlayed.json";
import heavyRoation from "../../assets/mockdata/heavyRotation.json";
import jumpBackIn from "../../assets/mockdata/jumpBackIn.json";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {

    private navCtrl: HTMLIonRouterElement;

componentDidLoad() {
  this.navCtrl = document.querySelector("ion-router");
}
  
data = [
    {
      title: "Recently Played",
      albums: recentlyPlayed
    },
    {
      title: "Heavy Rotation",
      albums: heavyRoation
    },
    {
      title: "Jump Back In",
      albums: jumpBackIn
    },
  ]

  opts = {
    slidesPerView: 2.5,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true,
  }

  private openAlbum(album) {
    console.log('in app-home.tsx=>openAlbum')
    console.log(album);
    console.log("you clicked on : ", album.title);
    const titleEscaped = encodeURIComponent(album.title);
    console.log("this router: ", this.navCtrl);
    
    console.log("target url: ", "/album/" + titleEscaped);
    this.navCtrl.push("/album/" + titleEscaped);
  }

  render() {
    return [
      <ion-content>
        {this.data.map((entry, idx) =>
          <ion-grid>
            <ion-row>
              <ion-col size="9">
                <h2 class="section-header">{entry.title}</h2>
              </ion-col>
              <ion-col size="3" class="ion-text-end">
                {(idx == 0) ?
                  <ion-button color="dark">
                    <ion-icon slot="icon-only" name="settings-outline"></ion-icon>
                  </ion-button>
                  : ""}
              </ion-col>
              <ion-slides mode="ios" options={this.opts}>
                {entry.albums.map((album) =>
                  <ion-slide class="album-slides" onClick={() => this.openAlbum(album)} >
                    <div class="slide-container">
                      <img src={"../../assets/images/albums/" + dasherize(album.image) + ".jpg"}></img>
                      <span class="album-title">{album.title}</span>
                    </div>
                  </ion-slide>

                )}
              </ion-slides>
            </ion-row>
          </ion-grid>
        )
        }
      </ion-content>,
    ];
  }
}
