import { $ } from '@wdio/globals';
import SideMenu from '../components/SideMenu';
import Page from './Page';

class InventoryPage extends Page {
  readonly path = '/inventory.html';
  readonly menu = SideMenu;

  get title() {
    return $('[data-test="title"]');
  }
}

export default new InventoryPage();
