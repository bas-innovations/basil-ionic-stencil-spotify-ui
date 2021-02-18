import { Component, h, State } from "@stencil/core";

@Component({
    tag: "app-tabs",
    styleUrl: "app-tabs.scss"
})
export class AppTabs {

    @State() selected: string;
    @State() progress: number = 42;
    tabs: HTMLIonTabsElement;

    componentDidLoad() {
        this.tabs = document.querySelector("ion-tabs");
    }

    async setSelectedTab() {
        console.log('CALLED');
        this.tabs = document.querySelector("ion-tabs");
        console.log(this.tabs);
        this.selected = await this.tabs.getSelected()
        console.log("in setSelectedTab: this.selected: ", this.selected);
    }

    render() {
        return [
            <ion-tabs id="mytabs" onIonTabsDidChange={() => this.setSelectedTab()}>
                <div slot="bottom" class="player">
                    <div class="progress-bar">
                        <div class="progress" style={{ width: this.progress + '%' }}></div>
                    </div>
                    <ion-row class="ion-no-padding">
                        <ion-col size="2" class="ion-no-padding">
                            <img src="/assets/images/albums/when-we-all-fall-asleep.jpg"></img>
                        </ion-col>
                        <ion-col size="8" class="ion-align-self-center">
                            <b>"All the Good Girls Go To Hell</b><br></br>
                            <span>Billie Eilish</span>
                        </ion-col>
                        <ion-col size="2" class="ion-text-center ion-no-padding ion-align-self-center">
                            <ion-icon name="play-sharp" color="color" size="large"></ion-icon>
                        </ion-col>
                    </ion-row>
                </div>
                

                <ion-tab tab="tab-home">
                    <ion-nav />
                </ion-tab>
                <ion-tab tab="tab-profile">
                    <ion-nav />
                </ion-tab>
                <ion-tab tab="tab-album">
                    <ion-nav />
                </ion-tab>

                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="tab-home">
                        <ion-icon name={(this.selected == "tab-home") ? "home" : "home-outline"} />
                        <ion-label>Home</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="tab-profile" href="/profile/notangular">
                        <ion-icon name={(this.selected == "tab-profile") ? "search" : "search-outline"} />
                        <ion-label>Profile</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="tab-album" href="/album/notangular">
                        <ion-icon name={(this.selected == "tab-album") ? "library" : "library-outline"} />
                        <ion-label>Album</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        ];
    }
}

<ion-tabs>
<ion-tab tab="tab-home">
  <ion-nav />
</ion-tab>

<ion-tab tab="tab-profile">
  <ion-nav />
</ion-tab>

<ion-tab-bar slot="bottom">
  <ion-tab-button tab="tab-home">
    <ion-icon name="home" />
    <ion-label>home</ion-label>
  </ion-tab-button>
  <ion-tab-button tab="tab-profile" href="/profile/notangular">
    <ion-icon name="person" />
    <ion-label>Profile</ion-label>
  </ion-tab-button>
</ion-tab-bar>
</ion-tabs>