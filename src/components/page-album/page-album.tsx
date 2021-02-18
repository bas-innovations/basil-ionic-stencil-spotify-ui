import { Component, h, Prop} from '@stencil/core';
import { dasherize } from '../../helpers/dasherize';
import albums from "../../assets/mockdata/albums";



@Component({
  tag: 'page-album',
  styleUrl: 'page-album.scss',
  shadow: true,
})
export class PageAlbum {
  @Prop() albumtitle: any;
  private data: any;

  componentWillLoad() {
    console.log('in page-album, componentWillLoad');
    const decodedTitle: string = decodeURIComponent(this.albumtitle);
    console.log("decodedTitle: ", decodedTitle);
    this.data = albums[decodedTitle];
    console.log('albums: ', albums);
    console.log('this.data: ', this.data);
    console.log('backgroundColor: ', this.data.backgroundColor);
  }

  private setScrollTop(ev) {
    let scrollTop = ev.detail.scrollTop;
    let newOpacity = Math.max(100 - (scrollTop/3), 0) / 100
    let newPadding = Math.min(15 + (scrollTop / 25), 100);

    document.documentElement.style.setProperty('--img-opacity', newOpacity.toString() );
    document.documentElement.style.setProperty('--img-padding', newPadding.toString() + '%');
  }

  render() {
    console.log("rendering");
    return ([
      <ion-header>
        <ion-toolbar style={{ "--background": this.data.backgroundColor }}>
          <ion-buttons slot="start">
            <ion-back-button style={{ "--color": "#fff" }} defaultHref="/" />
          </ion-buttons>
          <ion-title style={{ "--color": "#fff" }}>{"Profile: " + this.data.title}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true} style={{ "--custombg": this.data.backgroundColor }} scrollEvents onIonScroll={this.setScrollTop}>

        <div class='image-box'>
          <img class="image-img" src={"/assets/images/albums/" + dasherize(this.data.image) + ".jpg"}></img>
        </div>

        <div class="main">

          {/* <!-- General information --> */}
          <ion-row>
            <ion-col size="12" class="album-info">
              <p>{this.data.artist}</p>
              <span>Album {this.data.title} · {this.data.released}</span>
            </ion-col>
            <ion-col size="8" class="ion-text-left ion-no-padding">
              <ion-button fill="clear" class="ion-no-margin">
                <ion-icon name="heart-outline" color="light" slot="icon-only"></ion-icon>
              </ion-button>
              <ion-button fill="clear">
                <ion-icon name="arrow-down-circle-outline" color="light" slot="icon-only"></ion-icon>
              </ion-button>
              <ion-button fill="clear">
                <ion-icon name="ellipsis-horizontal" color="light" slot="icon-only"></ion-icon>
              </ion-button>
            </ion-col>
            <ion-col size="4" class="ion-text-right ion-no-padding">
              <ion-button fill="clear">
                <ion-icon name="play-circle" size="large" color="primary" slot="icon-only"></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>


          <ion-list class="track-list">
            {this.data.tracks.map(t =>
              <ion-item class="ion-no-lines track-list">
                <ion-label>{t.title}
                  <p>{this.data.artist}</p>
                </ion-label>
                <ion-icon slot="end" size="small" name="ellipsis-horizontal"></ion-icon>
              </ion-item>
            )}
          </ion-list>
        </div>

      </ion-content>
    ]
    );
  }

}
