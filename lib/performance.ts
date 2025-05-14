export function deferNonCriticalScripts() {
  if (typeof window === "undefined") return

  // Defer non-critical scripts
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const script = entry.target as HTMLScriptElement
        script.setAttribute("src", script.getAttribute("data-src") || "")
        script.removeAttribute("data-src")
        observer.unobserve(script)
      }
    })
  })

  // Find all scripts with data-src attribute
  document.querySelectorAll("script[data-src]").forEach((script) => {
    observer.observe(script)
  })
}

export function prefetchCriticalPages() {
  if (typeof window === "undefined") return

  // Prefetch critical pages
  const criticalPages = ["/", "/comparison", "/documentation"]

  // Wait until the page is loaded
  window.addEventListener("load", () => {
    // Wait a bit to not compete with initial page resources
    setTimeout(() => {
      criticalPages.forEach((page) => {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = page
        document.head.appendChild(link)
      })
    }, 2000)
  })
}

export function optimizeImages() {
  if (typeof window === "undefined") return

  // Lazy load images that are not in the viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        const src = img.getAttribute("data-src")
        if (src) {
          img.src = src
          img.removeAttribute("data-src")
        }
        observer.unobserve(img)
      }
    })
  })

  // Find all images with data-src attribute
  document.querySelectorAll("img[data-src]").forEach((img) => {
    observer.observe(img)
  })
}

export function initializePerformanceOptimizations() {
  deferNonCriticalScripts()
  prefetchCriticalPages()
  optimizeImages()
}
