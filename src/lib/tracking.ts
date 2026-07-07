export const trackGTMEvent = (eventName: string, data?: any) => {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...data,
    });
  }
};

export const trackMetaEvent = (eventName: string, data?: any) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    if (['PageView', 'Lead', 'Contact'].includes(eventName)) {
      // Standard events
      (window as any).fbq("track", eventName, data);
    } else {
      // Custom events
      (window as any).fbq("trackCustom", eventName, data);
    }
  }
};

export const trackLeadSubmit = (leadData: any) => {
  trackGTMEvent("form_submit", leadData);
  trackMetaEvent("Lead", { 
    content_name: 'Estate 361 Brochure', 
    currency: 'INR' 
  });
};

export const trackWhatsAppClick = () => {
  trackGTMEvent("whatsapp_click");
  trackMetaEvent("Contact", { method: "whatsapp" });
};

export const trackPhoneClick = () => {
  trackGTMEvent("phone_click");
  trackMetaEvent("Contact", { method: "phone" });
};

export const trackBrochureDownloadClick = () => {
  trackGTMEvent("brochure_click");
  trackMetaEvent("BrochureDownload");
};

export const trackPageView = (pageName: string) => {
  trackGTMEvent("page_view", { page: pageName });
  trackMetaEvent("PageView");
};
