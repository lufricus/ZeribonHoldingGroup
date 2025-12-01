import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Mail, Building2, Eye, Clock, Globe } from "lucide-react";
import { PageMeta } from "@/components/seo/PageMeta";
import type { ContactSubmission, PartnerRegistration } from "@shared/schema";

interface AnalyticsSummary {
  totalPageViews: number;
  uniqueSessions: number;
  topPages: { page: string; views: number }[];
  recentEvents: {
    id: string;
    type: string;
    page: string;
    createdAt: string;
  }[];
}

export default function Admin() {
  const { data: analyticsSummary, isLoading: analyticsLoading } = useQuery<AnalyticsSummary>({
    queryKey: ["/api/analytics/summary"],
  });

  const { data: contactSubmissions, isLoading: contactsLoading } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact"],
  });

  const { data: partnerRegistrations, isLoading: partnersLoading } = useQuery<PartnerRegistration[]>({
    queryKey: ["/api/partners"],
  });

  const formatDate = (date: string | Date | null) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getPageName = (path: string) => {
    const names: Record<string, string> = {
      "/": "Home",
      "/about": "About",
      "/capabilities": "Capabilities",
      "/government": "Government",
      "/partners": "Partners",
      "/contact": "Contact",
      "/service-areas": "Service Areas",
      "/admin": "Admin",
    };
    return names[path] || path;
  };

  return (
    <div>
      <PageMeta
        title="Admin Dashboard"
        description="Admin dashboard for Zeribon Holding Group website management"
        canonicalPath="/admin"
        page="home"
      />

      <section className="bg-deep-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-white mb-2" data-testid="text-admin-title">
            Admin Dashboard
          </h1>
          <p className="text-steel-gray">
            Manage content, view analytics, and monitor form submissions.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card data-testid="stat-page-views">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-mission-gold/10 rounded-md flex items-center justify-center">
                    <Eye className="w-6 h-6 text-mission-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{analyticsLoading ? "..." : analyticsSummary?.totalPageViews || 0}</p>
                    <p className="text-sm text-muted-foreground">Page Views</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="stat-sessions">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-md flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{analyticsLoading ? "..." : analyticsSummary?.uniqueSessions || 0}</p>
                    <p className="text-sm text-muted-foreground">Unique Sessions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="stat-contacts">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-md flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{contactsLoading ? "..." : contactSubmissions?.length || 0}</p>
                    <p className="text-sm text-muted-foreground">Contact Inquiries</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="stat-partners">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-md flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{partnersLoading ? "..." : partnerRegistrations?.length || 0}</p>
                    <p className="text-sm text-muted-foreground">Partner Registrations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="analytics" className="space-y-6">
            <TabsList data-testid="admin-tabs">
              <TabsTrigger value="analytics" data-testid="tab-analytics">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="contacts" data-testid="tab-contacts">
                <Mail className="w-4 h-4 mr-2" />
                Contacts
              </TabsTrigger>
              <TabsTrigger value="partners" data-testid="tab-partners">
                <Building2 className="w-4 h-4 mr-2" />
                Partners
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analytics">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-mission-gold" />
                      Top Pages
                    </CardTitle>
                    <CardDescription>Most visited pages on the site</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {analyticsLoading ? (
                      <p className="text-muted-foreground">Loading...</p>
                    ) : analyticsSummary?.topPages.length ? (
                      <div className="space-y-3">
                        {analyticsSummary.topPages.map((page, index) => (
                          <div key={page.page} className="flex items-center justify-between" data-testid={`top-page-${index}`}>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-medium text-muted-foreground w-6">{index + 1}.</span>
                              <span className="font-medium">{getPageName(page.page)}</span>
                            </div>
                            <Badge variant="secondary">{page.views} views</Badge>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-sm">No page views recorded yet. Visit some pages to see analytics.</p>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-mission-gold" />
                      Recent Activity
                    </CardTitle>
                    <CardDescription>Latest visitor actions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {analyticsLoading ? (
                      <p className="text-muted-foreground">Loading...</p>
                    ) : analyticsSummary?.recentEvents.length ? (
                      <div className="space-y-3 max-h-80 overflow-y-auto">
                        {analyticsSummary.recentEvents.slice(0, 10).map((event, index) => (
                          <div key={event.id} className="flex items-center justify-between text-sm" data-testid={`recent-event-${index}`}>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">{event.type}</Badge>
                              <span>{getPageName(event.page)}</span>
                            </div>
                            <span className="text-muted-foreground text-xs">{formatDate(event.createdAt)}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-sm">No activity recorded yet.</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="contacts">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Submissions</CardTitle>
                  <CardDescription>All inquiries received through the contact form</CardDescription>
                </CardHeader>
                <CardContent>
                  {contactsLoading ? (
                    <p className="text-muted-foreground">Loading...</p>
                  ) : contactSubmissions?.length ? (
                    <div className="space-y-4">
                      {contactSubmissions.map((submission) => (
                        <Card key={submission.id} className="bg-muted/30" data-testid={`contact-${submission.id}`}>
                          <CardContent className="p-4">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                              <div>
                                <p className="font-semibold">{submission.name}</p>
                                <p className="text-sm text-muted-foreground">{submission.email}</p>
                              </div>
                              <div className="text-right">
                                <Badge>{submission.subject}</Badge>
                                <p className="text-xs text-muted-foreground mt-1">{formatDate(submission.createdAt)}</p>
                              </div>
                            </div>
                            {submission.organization && (
                              <p className="text-sm text-muted-foreground mb-2">Organization: {submission.organization}</p>
                            )}
                            <p className="text-sm">{submission.message}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No contact submissions yet.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="partners">
              <Card>
                <CardHeader>
                  <CardTitle>Partner Registrations</CardTitle>
                  <CardDescription>All vendor and partner registration requests</CardDescription>
                </CardHeader>
                <CardContent>
                  {partnersLoading ? (
                    <p className="text-muted-foreground">Loading...</p>
                  ) : partnerRegistrations?.length ? (
                    <div className="space-y-4">
                      {partnerRegistrations.map((registration) => (
                        <Card key={registration.id} className="bg-muted/30" data-testid={`partner-${registration.id}`}>
                          <CardContent className="p-4">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                              <div>
                                <p className="font-semibold">{registration.companyName}</p>
                                <p className="text-sm text-muted-foreground">{registration.contactName} - {registration.email}</p>
                              </div>
                              <div className="text-right">
                                <Badge>{registration.registrationType}</Badge>
                                <p className="text-xs text-muted-foreground mt-1">{formatDate(registration.createdAt)}</p>
                              </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-2 text-sm">
                              {registration.phone && <p><span className="text-muted-foreground">Phone:</span> {registration.phone}</p>}
                              {registration.capabilities && <p><span className="text-muted-foreground">Capabilities:</span> {registration.capabilities}</p>}
                              {registration.certifications && <p><span className="text-muted-foreground">Certifications:</span> {registration.certifications}</p>}
                              {registration.naicsCodes && <p><span className="text-muted-foreground">NAICS:</span> {registration.naicsCodes}</p>}
                            </div>
                            {registration.message && (
                              <p className="text-sm mt-2 pt-2 border-t">{registration.message}</p>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No partner registrations yet.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
