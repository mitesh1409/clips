import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  constructor() {}

  ngAfterContentInit(): void {
    // Get active tabs.
    const activeTabs = this.tabs.filter(
      tab => tab.active
    );

    // If there are no active tabs then make first tab active.
    if (!activeTabs || activeTabs.length === 0) {
      this.tabs.first.active = true;
    }
  }

  selectTab(targetTab: TabComponent) {
    this.tabs.forEach(tab => {
      tab.active = false;
    });

    targetTab.active = true;
  }
}
