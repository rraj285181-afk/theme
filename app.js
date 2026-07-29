// Minimalist Launcher App Engine

// SVG path definitions for monochrome app icons
const iconPaths = {
  chrome: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>',
  camera: '<path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h-2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>',
  chat: '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>',
  contacts: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>',
  folder: '<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>',
  mail: '<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
  map: '<path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48v15.26c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>',
  music: '<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h6V3h-6z"/>',
  play: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 13V8l5 4-5 4z"/>',
  shield: '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>',
  settings: '<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>',
  youtube: '<path d="M23 12s-.2-2-1-3c-1-1.1-2.1-1.1-2.6-1.2C16 7.5 12 7.5 12 7.5s-4 0-7.4.3c-.5.1-1.6.1-2.6 1.2-.8 1-1 3-1 3s-.3 2-.3 4c0 2 .3 4 .3 4s.2 2 1 3c1 1.1 2.2 1.1 2.7 1.2 3.4.3 7.3.3 7.3.3s4 0 7.4-.3c.5-.1 1.6-.1 2.6-1.2.8-1 1-3 1-3s.3-2 .3-4c0-2-.3-4-.3-4zM9.5 15.5V9l6 3.25-6 3.25z"/>',
  image: '<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>',
  video: '<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>',
  default: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>'
};

// All available applications database
const appsDatabase = [
  { id: 'chrome', label: 'Chrome', category: 'C', icon: 'chrome', url: 'https://www.google.com' },
  { id: 'camera', label: 'Camera', category: 'C', icon: 'camera', url: '#' },
  { id: 'chat', label: 'WhatsApp', category: 'W', icon: 'chat', url: 'https://web.whatsapp.com' },
  { id: 'contacts', label: 'Contacts', category: 'C', icon: 'contacts', url: '#' },
  { id: 'files', label: 'Files', category: 'F', icon: 'folder', url: '#' },
  { id: 'gmail', label: 'Gmail', category: 'G', icon: 'mail', url: 'https://mail.google.com' },
  { id: 'maps', label: 'Maps', category: 'M', icon: 'map', url: 'https://maps.google.com' },
  { id: 'spotify', label: 'Spotify', category: 'S', icon: 'music', url: 'https://open.spotify.com' },
  { id: 'play', label: 'Play Store', category: 'P', icon: 'play', url: 'https://play.google.com' },
  { id: 'settings', label: 'Settings', category: 'S', icon: 'settings', url: '#' },
  { id: 'youtube', label: 'YouTube', category: 'Y', icon: 'youtube', url: 'https://www.youtube.com' },
  { id: 'gallery', label: 'Photos', category: 'P', icon: 'image', url: '#' },
  { id: 'node_video', label: 'Node Video', category: 'N', icon: 'video', url: '#' },
  { id: 'mon_vpn', label: 'Mon VPN', category: 'M', icon: 'shield', url: '#' }
];

// App State Management (Default fallback configuration values)
const DEFAULT_STATE = {
  username: 'BHAGWAN',
  focusText: 'IT\'S TIME TO FOCUS ON WORK',
  wallpaper: 'shoreline',
  favorites: ['chrome', 'node_video', 'mon_vpn', 'play', 'youtube', 'gallery', 'settings']
};

let appState = { ...DEFAULT_STATE };

// Initialize and load State from LocalStorage
function loadState() {
  const savedState = localStorage.getItem('niagara_launcher_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      appState = { ...DEFAULT_STATE, ...parsed };
    } catch (e) {
      console.warn('Failed to parse saved state, using default values.');
    }
  }
}

function saveState() {
  localStorage.setItem('niagara_launcher_state', JSON.stringify(appState));
}

// -----------------------------------------------------------------
// Secure DOM Node Creation Helpers (Adhering to XSS Prevention)
// -----------------------------------------------------------------
function createSvgElement(iconName) {
  const svgNamespace = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNamespace, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'currentColor');
  
  const pathMarkup = iconPaths[iconName] || iconPaths['default'];
  
  // DOMParser guarantees that SVG path parsing is completely isolated and secure
  const parser = new DOMParser();
  const parsedDoc = parser.parseFromString(`<svg xmlns="${svgNamespace}">${pathMarkup}</svg>`, 'image/svg+xml');
  const pathNode = parsedDoc.querySelector('path');
  
  if (pathNode) {
    const importedNode = document.importNode(pathNode, true);
    svg.appendChild(importedNode);
  }
  
  return svg;
}

// -----------------------------------------------------------------
// Launcher UI Renderer Engine
// -----------------------------------------------------------------

// Apply Theme Wallpaper
function updateWallpaperUI() {
  const backdrop = document.getElementById('wallpaperBackdrop');
  const themeName = appState.wallpaper;
  
  backdrop.style.background = '';
  backdrop.style.backgroundImage = '';
  
  if (themeName === 'shoreline') {
    backdrop.style.backgroundImage = "url('assets/shoreline.jpg')";
  } else if (themeName === 'dark') {
    backdrop.style.backgroundColor = '#050508';
  } else if (themeName === 'ocean') {
    backdrop.style.background = 'linear-gradient(185deg, #0b171c 0%, #15272d 50%, #1b353f 100%)';
  } else if (themeName === 'neon') {
    backdrop.style.background = 'linear-gradient(135deg, #180924 0%, #06060c 100%)';
  }
  
  // Update class on container for accent adjustments
  const container = document.getElementById('phoneContainer');
  container.className = 'phone-container';
  container.classList.add(`theme-accent-${themeName}`);
}

// Render Favorites List on Home Screen
function renderFavorites() {
  const listElement = document.getElementById('favoritesList');
  listElement.replaceChildren(); // Safe clear
  
  appState.favorites.forEach(appId => {
    const app = appsDatabase.find(a => a.id === appId);
    if (!app) return;
    
    const row = document.createElement('div');
    row.className = 'app-row-item';
    row.setAttribute('role', 'button');
    row.setAttribute('tabindex', '0');
    
    const iconContainer = document.createElement('div');
    iconContainer.className = 'app-row-icon';
    const svgIcon = createSvgElement(app.icon);
    iconContainer.appendChild(svgIcon);
    
    const label = document.createElement('span');
    label.className = 'app-row-label';
    label.textContent = app.label;
    
    row.appendChild(iconContainer);
    row.appendChild(label);
    
    row.addEventListener('click', () => {
      if (app.id === 'settings') {
        openSettingsDrawer();
      } else if (app.url && app.url !== '#') {
        window.open(app.url, '_blank');
      } else {
        // Mock loading app screen if no real URL
        triggerMockAppAlert(app.label);
      }
    });
    
    listElement.appendChild(row);
  });
}

function triggerMockAppAlert(appName) {
  // Production modal trigger mockup (instead of native alert)
  const dialog = document.createElement('div');
  dialog.className = 'mock-alert-overlay';
  
  const card = document.createElement('div');
  card.className = 'mock-alert-card';
  
  const title = document.createElement('h4');
  title.textContent = appName;
  
  const text = document.createElement('p');
  text.textContent = `Running simulated context for "${appName}" inside launcher WebView container.`;
  
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.addEventListener('click', () => {
    dialog.remove();
  });
  
  card.appendChild(title);
  card.appendChild(text);
  card.appendChild(closeBtn);
  dialog.appendChild(card);
  document.body.appendChild(dialog);
}

// Render App Drawer complete list alphabetically
function renderAppDrawerList() {
  const drawerList = document.getElementById('appListScrollable');
  drawerList.replaceChildren(); // Safe clear
  
  // Sort Database alphabetically
  const sortedApps = [...appsDatabase].sort((a, b) => a.label.localeCompare(b.label));
  
  // Group by alphabetical letters
  const groups = {};
  sortedApps.forEach(app => {
    const firstLetter = app.label.charAt(0).toUpperCase();
    const key = /[A-Z]/.test(firstLetter) ? firstLetter : '#';
    if (!groups[key]) groups[key] = [];
    groups[key].push(app);
  });
  
  // Generate categories HTML elements
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');
  letters.forEach(letter => {
    if (!groups[letter] || groups[letter].length === 0) return;
    
    const groupBlock = document.createElement('div');
    groupBlock.className = 'drawer-category-group';
    groupBlock.id = `catGroup-${letter}`;
    
    const header = document.createElement('div');
    header.className = 'drawer-category-header';
    header.id = `catHeader-${letter}`;
    header.textContent = letter;
    groupBlock.appendChild(header);
    
    groups[letter].forEach(app => {
      const row = document.createElement('div');
      row.className = 'app-row-item';
      row.setAttribute('role', 'button');
      row.setAttribute('tabindex', '0');
      
      const iconContainer = document.createElement('div');
      iconContainer.className = 'app-row-icon';
      const svgIcon = createSvgElement(app.icon);
      iconContainer.appendChild(svgIcon);
      
      const label = document.createElement('span');
      label.className = 'app-row-label';
      label.textContent = app.label;
      
      row.appendChild(iconContainer);
      row.appendChild(label);
      
      row.addEventListener('click', () => {
        if (app.id === 'settings') {
          openSettingsDrawer();
        } else if (app.url && app.url !== '#') {
          window.open(app.url, '_blank');
        } else {
          triggerMockAppAlert(app.label);
        }
      });
      
      groupBlock.appendChild(row);
    });
    
    drawerList.appendChild(groupBlock);
  });
}

// Generate the Right Side Alphabet Sidebar index keys
function renderAlphabetSidebar() {
  const bar = document.getElementById('alphabetIndexBar');
  bar.replaceChildren(); // Safe clear
  
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');
  
  letters.forEach(letter => {
    const btn = document.createElement('div');
    btn.className = 'alphabet-letter-btn';
    btn.textContent = letter;
    btn.setAttribute('data-letter', letter);
    
    // Add event listener to jump to selected header
    btn.addEventListener('click', () => {
      scrollToCategory(letter);
    });
    
    bar.appendChild(btn);
  });
}

function scrollToCategory(letter) {
  const targetHeader = document.getElementById(`catHeader-${letter}`);
  if (targetHeader) {
    targetHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    triggerLetterBubble(letter);
  }
}

// Show Floating zoom bubble preview
let bubbleTimeout = null;
function triggerLetterBubble(letter) {
  const bubble = document.getElementById('letterBubblePreview');
  bubble.textContent = letter;
  bubble.classList.remove('hidden');
  
  if (bubbleTimeout) clearTimeout(bubbleTimeout);
  bubbleTimeout = setTimeout(() => {
    bubble.classList.add('hidden');
  }, 1000);
}

// Drag functionality for the alphabet index sidebar
function setupAlphabetDrag() {
  const bar = document.getElementById('alphabetIndexBar');
  
  const handleDrag = (clientY) => {
    const rect = bar.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    const height = rect.height;
    
    // Calculate percentage down the scrollbar
    const pct = Math.max(0, Math.min(1, relativeY / height));
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');
    const idx = Math.floor(pct * (letters.length - 1));
    const letter = letters[idx];
    
    if (letter) {
      scrollToCategory(letter);
      
      // Update visual active state on sidebar
      document.querySelectorAll('.alphabet-letter-btn').forEach(btn => {
        if (btn.getAttribute('data-letter') === letter) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  };

  bar.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (e.touches && e.touches[0]) {
      handleDrag(e.touches[0].clientY);
    }
  }, { passive: false });

  bar.addEventListener('mousemove', (e) => {
    if (e.buttons === 1) { // Left click dragging
      handleDrag(e.clientY);
    }
  });
}

// Real-time Search App filtering
function setupAppSearch() {
  const input = document.getElementById('drawerSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  
  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
    
    const categoryGroups = document.querySelectorAll('.drawer-category-group');
    
    categoryGroups.forEach(group => {
      let visibleApps = 0;
      const appRows = group.querySelectorAll('.app-row-item');
      
      appRows.forEach(row => {
        const appName = row.querySelector('.app-row-label').textContent.toLowerCase();
        if (appName.includes(query)) {
          row.style.display = '';
          visibleApps++;
        } else {
          row.style.display = 'none';
        }
      });
      
      // Hide entire letter category if no apps match inside it
      if (visibleApps > 0) {
        group.style.display = '';
      } else {
        group.style.display = 'none';
      }
    });
  });
  
  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.add('hidden');
    
    // Show all categories and apps
    document.querySelectorAll('.drawer-category-group').forEach(group => {
      group.style.display = '';
      group.querySelectorAll('.app-row-item').forEach(row => {
        row.style.display = '';
      });
    });
  });
}

// -----------------------------------------------------------------
// Widget Screen: Time & Curved Minutes Rolling Dial clock
// -----------------------------------------------------------------
function initClockDial() {
  const wheel = document.getElementById('dialWheel');
  wheel.replaceChildren(); // Safe clear
  
  // Render list items 00 to 59 for rolling wheel minutes
  for (let i = 0; i < 60; i++) {
    const item = document.createElement('div');
    item.className = 'dial-number-item';
    item.textContent = i.toString().padStart(2, '0');
    item.id = `dialMinute-${i}`;
    wheel.appendChild(item);
  }
}

function updateClockAndDialUI() {
  const now = new Date();
  const hrs = now.getHours().toString().padStart(2, '0');
  const mins = now.getMinutes();
  
  // 1. Update basic status bar time & hour display
  document.getElementById('statusTime').textContent = `${hrs}:${mins.toString().padStart(2, '0')}`;
  document.getElementById('dialHour').textContent = hrs;
  
  // 2. Rotate/translate minutes dial wheel
  // Height of each item is 38px. Middle highlight container is positioned at 81px offset from top
  const wheel = document.getElementById('dialWheel');
  const offset = 81 - (mins * 38);
  wheel.style.transform = `translateY(${offset}px)`;
  
  // 3. Apply curving rotation/offset offsets to adjacent numbers dynamically
  for (let i = 0; i < 60; i++) {
    const item = document.getElementById(`dialMinute-${i}`);
    if (!item) continue;
    
    const dist = Math.abs(i - mins);
    
    // Clear dynamic class markings
    item.className = 'dial-number-item';
    item.style.transform = '';
    item.style.opacity = '';
    
    if (dist === 0) {
      item.classList.add('active');
    } else if (dist === 1) {
      item.classList.add('adjacent-1');
      // Slight convex curvature rotation (shifted right)
      item.style.transform = 'translateX(10px) scale(0.95)';
    } else if (dist === 2) {
      item.classList.add('adjacent-2');
      item.style.transform = 'translateX(22px) scale(0.85)';
    } else {
      // Numbers far away are pushed even further right and faded out
      item.style.transform = `translateX(${22 + (dist * 4)}px) scale(${Math.max(0.6, 0.8 - (dist * 0.05))})`;
      item.style.opacity = Math.max(0.05, 0.3 - (dist * 0.03)).toString();
    }
  }
  
  // 4. Update numeric date and day displays on widget/home page
  const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  const widgetDateStr = now.toLocaleDateString('en-US', dateOptions).toUpperCase();
  document.getElementById('widgetDate').textContent = widgetDateStr;
  
  const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const dayStr = daysOfWeek[now.getDay()];
  document.getElementById('widgetDay').textContent = dayStr;
  document.getElementById('homeDateTitle').textContent = `IT'S ${dayStr}`;
  
  // Favorite top header date
  const favDateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  document.getElementById('favDateIndicator').textContent = now.toLocaleDateString('en-US', favDateOptions);
}

// Battery simulator logic
function updateBatteryStatus() {
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      const updateChargeLevel = () => {
        const pctVal = Math.round(battery.level * 100);
        const pctStr = `${pctVal}%`;
        
        document.getElementById('topBatteryPct').textContent = pctStr;
        document.getElementById('batteryText').textContent = `${pctStr} Battery`;
        
        // Adjust battery icon path based on charge
        const svg = document.getElementById('batteryIconSvg');
        if (battery.charging) {
          // Lightning bolt configuration
          svg.replaceChildren();
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z');
          svg.appendChild(path);
        } else {
          // Normal battery bar
          svg.replaceChildren();
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', 'M17 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm1 9H2V8h16v6zm5-5v6c.9 0 1.5-.7 1.5-1.5v-3c0-.8-.6-1.5-1.5-1.5z');
          svg.appendChild(path);
        }
      };
      
      updateChargeLevel();
      battery.addEventListener('levelchange', updateChargeLevel);
      battery.addEventListener('chargingchange', updateChargeLevel);
    });
  } else {
    // Fallback static configuration if Battery API is not supported in browser
    document.getElementById('topBatteryPct').textContent = '78%';
    document.getElementById('batteryText').textContent = '78% Battery';
  }
}

// -----------------------------------------------------------------
// Horizontal Page Swiping Engine (Widget Screen <-> Home <-> App Drawer)
// -----------------------------------------------------------------
let activeScreenIndex = 1; // Default to Home screen (index 1)
let touchStartX = 0;
let touchStartY = 0;
let isSwipeAction = false;

function navigateToScreen(idx) {
  if (idx < 0 || idx > 2) return;
  
  const slider = document.getElementById('screensSlider');
  
  // Disable active layout configurations on old screens
  document.querySelectorAll('.screen-page').forEach((pg, i) => {
    if (i === idx) {
      pg.classList.add('active');
    } else {
      pg.classList.remove('active');
    }
  });
  
  activeScreenIndex = idx;
  slider.style.transform = `translateX(-${idx * 100}%)`;
}

function setupSwipeGestures() {
  const container = document.getElementById('phoneContainer');

  container.addEventListener('touchstart', (e) => {
    // Do not trigger swiping if scrolling inside settings drawer or editing search
    if (e.target.closest('#settingsDrawer') || e.target.closest('#drawerSearchInput') || e.target.closest('#alphabetIndexBar') || e.target.closest('#appListScrollable')) {
      return;
    }
    
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isSwipeAction = true;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    if (!isSwipeAction) return;
    
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    
    // Check horizontal swipes (longer distance than vertical movements)
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        // Swipe Right (Go to left screen)
        navigateToScreen(activeScreenIndex - 1);
      } else {
        // Swipe Left (Go to right screen)
        navigateToScreen(activeScreenIndex + 1);
      }
    }
    
    isSwipeAction = false;
  }, { passive: true });

  // Expose swipe actions via buttons as fallbacks
  document.getElementById('settingsTriggerBtn').addEventListener('click', () => {
    openSettingsDrawer();
  });
}

// -----------------------------------------------------------------
// Settings Drawer Controller & Customizations Panel
// -----------------------------------------------------------------
function openSettingsDrawer() {
  // Load current details into settings inputs
  document.getElementById('inputUsername').value = appState.username;
  document.getElementById('inputFocusText').value = appState.focusText;
  
  // Set active wallpaper selected option
  document.querySelectorAll('.wallpaper-option').forEach(opt => {
    if (opt.getAttribute('data-wallpaper') === appState.wallpaper) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });
  
  // Build Favorites Customization Editor checklist
  buildFavoritesSelectorUI();
  
  // Show settings Drawer panels
  document.getElementById('settingsDrawerBackdrop').classList.remove('hidden');
  document.getElementById('settingsDrawer').classList.remove('hidden');
}

function closeSettingsDrawer() {
  document.getElementById('settingsDrawerBackdrop').classList.add('hidden');
  document.getElementById('settingsDrawer').classList.add('hidden');
  
  // Save modifications to state
  appState.username = document.getElementById('inputUsername').value.toUpperCase().trim() || 'USER';
  appState.focusText = document.getElementById('inputFocusText').value.toUpperCase().trim() || 'FOCUS TIME';
  
  // Re-save State and update elements
  saveState();
  document.getElementById('greetingUser').textContent = `GOOD EVENING, ${appState.username}`;
  document.getElementById('focusSubtitle').textContent = appState.focusText;
  
  renderFavorites();
}

function buildFavoritesSelectorUI() {
  const container = document.getElementById('favoritesEditorList');
  container.replaceChildren(); // Safe clear
  
  const sortedApps = [...appsDatabase].sort((a, b) => a.label.localeCompare(b.label));
  
  sortedApps.forEach(app => {
    const row = document.createElement('div');
    row.className = 'fav-edit-row';
    row.setAttribute('role', 'checkbox');
    row.setAttribute('aria-checked', appState.favorites.includes(app.id) ? 'true' : 'false');
    
    const leftGroup = document.createElement('div');
    leftGroup.className = 'fav-edit-left';
    
    const icon = createSvgElement(app.icon);
    icon.classList.add('fav-edit-icon');
    
    const label = document.createElement('span');
    label.className = 'fav-edit-label';
    label.textContent = app.label;
    
    leftGroup.appendChild(icon);
    leftGroup.appendChild(label);
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'fav-edit-checkbox';
    checkbox.checked = appState.favorites.includes(app.id);
    
    row.appendChild(leftGroup);
    row.appendChild(checkbox);
    
    row.addEventListener('click', (e) => {
      // Toggle check item
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      
      const checked = checkbox.checked;
      row.setAttribute('aria-checked', checked ? 'true' : 'false');
      
      if (checked) {
        if (!appState.favorites.includes(app.id)) {
          appState.favorites.push(app.id);
        }
      } else {
        appState.favorites = appState.favorites.filter(id => id !== app.id);
      }
    });
    
    container.appendChild(row);
  });
}

function setupSettingsListeners() {
  document.getElementById('closeSettingsBtn').addEventListener('click', closeSettingsDrawer);
  document.getElementById('settingsDrawerBackdrop').addEventListener('click', closeSettingsDrawer);
  
  // Wallpaper buttons selection
  document.querySelectorAll('.wallpaper-option').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.wallpaper-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      appState.wallpaper = btn.getAttribute('data-wallpaper');
      updateWallpaperUI();
      saveState();
    });
  });
}

// -----------------------------------------------------------------
// Application Boot Loader
// -----------------------------------------------------------------
function bootLauncher() {
  loadState();
  
  // Setup user details from State
  document.getElementById('greetingUser').textContent = `GOOD EVENING, ${appState.username}`;
  document.getElementById('focusSubtitle').textContent = appState.focusText;
  
  // Initialize panels
  updateWallpaperUI();
  renderFavorites();
  renderAppDrawerList();
  renderAlphabetSidebar();
  
  // Setup widgets & dials
  initClockDial();
  updateClockAndDialUI();
  updateBatteryStatus();
  
  // Listeners
  setupAlphabetDrag();
  setupAppSearch();
  setupSwipeGestures();
  navigateToScreen(activeScreenIndex);
  setupSettingsListeners();
  
  // Launch periodic updates (Clock update loop)
  setInterval(updateClockAndDialUI, 1000);
  
  // Register service worker if PWA is supported (secure context only)
  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Launcher Service Worker Registered Successfully.', reg.scope))
      .catch(err => console.warn('Service Worker Registration Failed:', err));
  }
}

// Run boot sequence when DOM is fully loaded
window.addEventListener('DOMContentLoaded', bootLauncher);
