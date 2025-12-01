type AnalyticsEvent = {
  type: "page_view" | "button_click" | "form_submit" | "download";
  page: string;
  referrer?: string;
  timestamp: number;
  metadata?: Record<string, string>;
};

class Analytics {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private initialized = false;

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  }

  init() {
    if (this.initialized) return;
    this.initialized = true;
    
    this.trackPageView(window.location.pathname);
    
    window.addEventListener("popstate", () => {
      this.trackPageView(window.location.pathname);
    });
  }

  trackPageView(page: string) {
    const event: AnalyticsEvent = {
      type: "page_view",
      page,
      referrer: document.referrer || undefined,
      timestamp: Date.now(),
    };
    
    this.events.push(event);
    this.sendToServer(event);
    
    if (typeof window !== "undefined" && (window as any).DEBUG_ANALYTICS) {
      console.log("[Analytics] Page view:", page);
    }
  }

  trackButtonClick(buttonId: string, page: string) {
    const event: AnalyticsEvent = {
      type: "button_click",
      page,
      timestamp: Date.now(),
      metadata: { buttonId },
    };
    
    this.events.push(event);
    this.sendToServer(event);
  }

  trackFormSubmit(formName: string, page: string) {
    const event: AnalyticsEvent = {
      type: "form_submit",
      page,
      timestamp: Date.now(),
      metadata: { formName },
    };
    
    this.events.push(event);
    this.sendToServer(event);
  }

  trackDownload(fileName: string, page: string) {
    const event: AnalyticsEvent = {
      type: "download",
      page,
      timestamp: Date.now(),
      metadata: { fileName },
    };
    
    this.events.push(event);
    this.sendToServer(event);
  }

  private async sendToServer(event: AnalyticsEvent) {
    try {
      await fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...event,
          sessionId: this.sessionId,
          userAgent: navigator.userAgent,
          screenWidth: window.innerWidth,
          screenHeight: window.innerHeight,
        }),
      });
    } catch (error) {
      // Silently fail - analytics should not break the app
    }
  }

  getEvents() {
    return [...this.events];
  }

  getSessionId() {
    return this.sessionId;
  }
}

export const analytics = new Analytics();
