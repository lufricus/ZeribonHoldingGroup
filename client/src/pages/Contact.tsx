import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Mail, MapPin, Clock, Send, CheckCircle,
  FileText, Users, Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageMeta } from "@/components/seo/PageMeta";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "rfp", label: "RFP/RFQ Submission" },
  { value: "capabilities", label: "Capability Statement Request" },
  { value: "teaming", label: "Teaming Opportunity" },
  { value: "subcontractor", label: "Subcontractor Registration" },
  { value: "vendor", label: "Vendor Registration" },
  { value: "employment", label: "Employment Inquiry" },
];

const quickContacts = [
  {
    icon: FileText,
    title: "RFP/RFQ Submissions",
    description: "Submit solicitations and procurement requests",
    action: "rfp",
  },
  {
    icon: Users,
    title: "Teaming Inquiries",
    description: "Explore partnership and teaming opportunities",
    action: "teaming",
  },
  {
    icon: Briefcase,
    title: "Vendor Registration",
    description: "Register as an approved vendor or supplier",
    action: "vendor",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      subject: "",
      message: "",
      submissionType: "general",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond within 24-48 business hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitMutation.mutate(data);
  };

  const handleQuickContact = (action: string) => {
    form.setValue("subject", action);
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <PageMeta 
        title="Contact Us"
        description="Contact Zeribon Holding Group for RFP/RFQ submissions, teaming inquiries, vendor registration, capability statements, or general questions about government contracting services. Response within 24-48 business hours."
        keywords="contact government contractor, RFP submission, RFQ submission, teaming inquiry, vendor registration, capability statement, Washington DC, federal contractor contact"
        canonicalPath="/contact"
        page="contact"
      />
      {/* Hero */}
      <section className="bg-deep-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-mission-gold text-sm font-medium tracking-widest uppercase mb-4" data-testid="text-contact-subtitle">Get In Touch</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6" data-testid="text-contact-title">
              Contact Us
            </h1>
            <p className="text-xl text-steel-gray leading-relaxed" data-testid="text-contact-description">
              Ready to discuss your mission requirements? Our team is standing by 
              to assist with proposals, capabilities, and partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <Section className="bg-muted/30">
        <div className="grid md:grid-cols-3 gap-6">
          {quickContacts.map((item, index) => (
            <Card 
              key={item.action} 
              className="hover-elevate cursor-pointer"
              onClick={() => handleQuickContact(item.action)}
              data-testid={`card-quick-contact-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-mission-gold/10 rounded-md flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-mission-gold" />
                </div>
                <h3 className="font-heading font-semibold mb-2" data-testid={`text-quick-title-${index}`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-quick-desc-${index}`}>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section id="contact-form">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <SectionHeader
              subtitle="Send a Message"
              title="Contact Form"
              description="Fill out the form below and our team will respond within 24-48 business hours."
            />
            
            {submitted ? (
              <Card className="bg-mission-gold/5 border-mission-gold/20">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-mission-gold mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-2" data-testid="text-success-title">Message Received</h3>
                  <p className="text-muted-foreground mb-6" data-testid="text-success-message">
                    Thank you for contacting Zeribon Holding Group. Our team will review 
                    your inquiry and respond within 24-48 business hours.
                  </p>
                  <Button onClick={() => { setSubmitted(false); form.reset(); }} data-testid="button-send-another">
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Smith" 
                                  {...field} 
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="john@example.com" 
                                  {...field}
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel" 
                                  placeholder="(555) 123-4567" 
                                  {...field}
                                  value={field.value ?? ""}
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Organization</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Company / Agency Name" 
                                  {...field}
                                  value={field.value ?? ""}
                                  data-testid="input-organization"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-subject">
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {subjectOptions.map((option) => (
                                  <SelectItem 
                                    key={option.value} 
                                    value={option.value}
                                    data-testid={`option-subject-${option.value}`}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your inquiry, requirements, or how we can assist you..."
                                rows={6}
                                {...field}
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full sm:w-auto"
                        disabled={submitMutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {submitMutation.isPending ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <SectionHeader
              subtitle="Direct Contact"
              title="Get In Touch"
            />
            
            <div className="space-y-6">
              <Card data-testid="card-contact-email">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-mission-gold/10 rounded-md flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-mission-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:contact@zeribongroup.com" 
                        className="text-muted-foreground hover:text-mission-gold transition-colors"
                        data-testid="link-contact-email"
                      >
                        contact@zeribongroup.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card data-testid="card-contact-location">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-mission-gold/10 rounded-md flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-mission-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground" data-testid="text-location">
                        United States<br />
                        Global Operations Capability
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card data-testid="card-contact-hours">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-mission-gold/10 rounded-md flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-mission-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground" data-testid="text-hours">
                        Monday - Friday<br />
                        9:00 AM - 5:00 PM EST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Response Commitment */}
            <Card className="mt-6 bg-mission-gold/5 border-mission-gold/20" data-testid="card-commitment">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold mb-2">Our Commitment</h3>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24-48 business hours. 
                  For urgent matters, please indicate the urgency in your message 
                  and we will prioritize accordingly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
