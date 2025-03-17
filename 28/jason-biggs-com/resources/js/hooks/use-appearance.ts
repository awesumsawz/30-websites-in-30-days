// Simple function to initialize the theme based on localStorage or system preference
export function initializeTheme(): void {
  const savedMode = localStorage.getItem('dark-mode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = savedMode ? savedMode === 'true' : prefersDark;
  
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

// Hook for appearance changes
export function useAppearance() {
  const isDark = document.documentElement.classList.contains('dark');
  
  const setDarkMode = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    }
  };
  
  return { isDark, setDarkMode };
}
