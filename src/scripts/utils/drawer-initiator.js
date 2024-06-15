const DrawerInitiator = {
  init({ button, drawer, content }) {
    if (!button || !drawer || !content) return;

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    if (drawer.classList.contains('open')) {
      drawer.classList.remove('open');
    } else {
      drawer.classList.add('open');
    }
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
