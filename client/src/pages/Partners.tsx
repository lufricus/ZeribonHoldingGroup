import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Users, FileCheck, Building2, Briefcase, Handshake,
  ArrowRight, CheckCircle, ClipboardList, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { insertPartnerSchema, type InsertPartner } from "@shared/schema";

const partnerBenefits = [
  "Access to federal contracting opportunities",
  "Collaborative teaming arrangements",
  "Mentorship programs for small businesses",
  "Joint venture potential",
  "Subcontracting opportunities across 10 capability areas",
  "Global operations partnership",
];

const smallBusinessPrograms = [
  { code: "SDVOSB", name: "Service-Disabled Veteran-Owned Small Business" },
  { code: "VOSB", name: "Veteran-Owned Small Business" },
  { code: "MBE", name: "Minority Business Enterprise" },
  { code: "WOSB", name: "Women-Owned Small Business" },
  { code: "8(a)", name: "SBA 8(a) Business Development Program" },
  { code: "HUBZone", name: "Historically Underutilized Business Zone" },
];

const vendorRequirements = [
  "W-9 Tax Identification Form",
  "Certificate of Insurance (COI)",
  "SAM Registration (if applicable)",
  "Business License",
  "Banking Information for ACH",
  "Capability Statement",
];

const registrationTypes = [
  { value: "subcontractor", label: "Subcontractor" },
  { value: "vendor", label: "Vendor/Supplier" },
  { value: "teaming", label: "Teaming Partner" },
  { value: "joint-venture", label: "Joint Venture" },
];

export default function Partners() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertPartner>({
    resolver: zodResolver(insertPartnerSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      address: "",
      registrationType: "",
      capabilities: "",
      certifications: "",
      naicsCodes: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertPartner) => {
      const response = await apiRequest("POST", "/api/partners", data);
      return response;
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Registration Received",
        description: "Thank you for registering. Our team will review and contact you within 48 business hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem processing your registration. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertPartner) => {
    submitMutation.mutate(data);
  };

  return (
    <div>
      <PageMeta 
        title="Strategic Partners"
        description="Join Zeribon Holding Group's network of trusted partners. Explore teaming opportunities, subcontractor registration, vendor onboarding, and small business programs for government contractors serving federal, state, and local agencies nationwide."
        keywords="teaming opportunities, subcontractor registration, vendor onboarding, small business programs, SDVOSB, VOSB, 8(a), WOSB, HUBZone, MBE, prime contractor, joint venture"
        canonicalPath="/partners"
        page="partners"
      />
      
      {/* Hero */}
      <section className="bg-deep-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-mission-gold text-sm font-medium tracking-widest uppercase mb-4" data-testid="text-partners-subtitle">Partner With Us</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6" data-testid="text-partners-title">
              Strategic Partners
            </h1>
            <p className="text-xl text-steel-gray leading-relaxed" data-testid="text-partners-description">
              Join our network of trusted partners. Whether you're a prime contractor, 
              subcontractor, or vendor, we offer pathways for collaboration and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Teaming Opportunities */}
      <Section id="teaming">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Collaboration"
              title="Teaming Opportunities"
              description="We actively seek teaming arrangements with prime contractors and other government contractors to pursue and perform on federal contracts."
            />
            
            <ul className="space-y-3 mb-8">
              {partnerBenefits.map((benefit, index) => (
                <li key={benefit} className="flex items-start gap-3" data-testid={`benefit-item-${index}`}>
                  <CheckCircle className="w-5 h-5 text-mission-gold mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <a href="#registration-form">
              <Button data-testid="button-teaming-inquiry">
                Submit Teaming Inquiry
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="hover-elevate" data-testid="card-prime-partners">
              <CardContent className="p-6 text-center">
                <Handshake className="w-10 h-10 text-mission-gold mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Prime Partners</h3>
                <p className="text-sm text-muted-foreground">
                  Team with primes for large federal opportunities
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-joint-ventures">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 text-mission-gold mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Joint Ventures</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic JV partnerships for targeted pursuits
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-mentor-protege">
              <CardContent className="p-6 text-center">
                <Briefcase className="w-10 h-10 text-mission-gold mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Mentor-Protege</h3>
                <p className="text-sm text-muted-foreground">
                  Development programs for small businesses
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-elevate" data-testid="card-subcontracting">
              <CardContent className="p-6 text-center">
                <Building2 className="w-10 h-10 text-mission-gold mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Subcontracting</h3>
                <p className="text-sm text-muted-foreground">
                  Tier 2/3 subcontracting opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Partner Registration Form */}
      <Section dark id="registration-form">
        <SectionHeader
          subtitle="Join Our Network"
          title="Partner Registration"
          description="Register as a subcontractor, vendor, or teaming partner to be considered for opportunities on our contracts."
          dark
        />
        
        <div className="max-w-3xl">
          {submitted ? (
            <Card className="bg-mission-gold/10 border-mission-gold/30">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-mission-gold mx-auto mb-4" />
                <h3 className="font-heading font-bold text-2xl text-white mb-2" data-testid="text-reg-success-title">Registration Received</h3>
                <p className="text-steel-gray mb-6" data-testid="text-reg-success-message">
                  Thank you for registering with Zeribon Holding Group. Our partnerships team 
                  will review your information and contact you within 48 business hours.
                </p>
                <Button onClick={() => { setSubmitted(false); form.reset(); }} data-testid="button-register-another">
                  Submit Another Registration
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-federal-blue/30 border-federal-blue/50">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-partner-registration">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Company Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your Company Name" 
                                {...field}
                                className="bg-federal-blue/50 border-federal-blue text-white placeholder:text-steel-gray"
                                data-testid="input-company-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Contact Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Primary Contact" 
                                {...field}
                                className="bg-federal-blue/50 border-federal-blue text-white placeholder:text-steel-gray"
                                data-testid="input-contact-name"
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
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="email@company.com" 
                                {...field}
                                className="bg-federal-blue/50 border-federal-blue text-white placeholder:text-steel-gray"
                                data-testid="input-partner-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Phone Number *</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="(555) 123-4567" 
                                {...field}
                                className="bg-federal-blue/50 border-federal-blue text-white placeholder:text-steel-gray"
                                data-testid="input-partner-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="registrationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Registration Type *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="bg-federal-blue/50 border-federal-blue text-white"
                                data-testid="select-registration-type"
                              >
                                <SelectValue placeholder="Select registration type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {registrationTypes.map((type) => (
                                <SelectItem 
                                  key={type.value} 
                                  value={type.value}
                                  data-testid={`option-reg-type-${type.value}`}
                                >
                                  {type.label}
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
                      name="capabilities"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Capabilities / Services</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your primary capabilities and services..."
                              rows={3}
                              {...field}
                              value={field.value ?? ""}
                              className="bg-federal-blue/50 border-federal-blue text-white placeholder:text-steel-gray"
                              data-testid="input-capabilities"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="certifications"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Certifications (SDVOSB, 8(a), etc.)</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., SDVOSB, WOSB, 8(a)" 
                                {...field}
                                value={field.value ?? ""}
                                className="bg-federal-blue/50 border-federal-blue text-white placeholder:text-steel-gray"
                                data-testid="input-certifications"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="naicsCodes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">NAICS Codes</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., 541611, 561210" 
                                {...field}
                                value={field.value ?? ""}
                                className="bg-federal-blue/50 border-federal-blue text-white placeholder:text-steel-gray"
                                data-testid="input-naics-codes"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Additional Information</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your interest in partnering with Zeribon..."
                              rows={4}
                              {...field}
                              value={field.value ?? ""}
                              className="bg-federal-blue/50 border-federal-blue text-white placeholder:text-steel-gray"
                              data-testid="input-partner-message"
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
                      data-testid="button-submit-registration"
                    >
                      {submitMutation.isPending ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Registration
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
      </Section>

      {/* Vendor Onboarding */}
      <Section id="vendor" className="bg-muted/30">
        <SectionHeader
          subtitle="Suppliers & Vendors"
          title="Vendor Onboarding"
          description="Become an approved vendor to supply products and services for our government contracts."
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading font-semibold text-xl mb-6">Required Documents</h3>
            <div className="space-y-3">
              {vendorRequirements.map((req, index) => (
                <div 
                  key={req}
                  className="flex items-center gap-3 bg-card border border-card-border rounded-md p-4 hover-elevate"
                  data-testid={`vendor-req-${index}`}
                >
                  <FileCheck className="w-5 h-5 text-mission-gold shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Card data-testid="card-vendor-info">
              <CardHeader>
                <CardTitle>Vendor Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We are always looking for qualified vendors to support our contract requirements. 
                  Categories of interest include:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>IT Equipment</li>
                  <li>Office Supplies</li>
                  <li>Tactical Gear</li>
                  <li>Cleaning Supplies</li>
                  <li>Safety Equipment</li>
                  <li>Fleet Vehicles</li>
                  <li>Uniforms</li>
                  <li>Telecommunications</li>
                </ul>
                
                <a href="#registration-form">
                  <Button className="w-full" data-testid="button-vendor-registration">
                    Start Vendor Registration
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Small Business Programs */}
      <Section id="small-business">
        <SectionHeader
          subtitle="Diversity & Inclusion"
          title="Small Business Programs"
          description="We are committed to supporting small and disadvantaged businesses through our subcontracting programs."
          centered
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {smallBusinessPrograms.map((program, index) => (
            <Card key={program.code} className="hover-elevate text-center" data-testid={`card-program-${index}`}>
              <CardContent className="p-4">
                <p className="text-mission-gold font-heading font-bold text-lg mb-1">
                  {program.code}
                </p>
                <p className="text-xs text-muted-foreground leading-tight">
                  {program.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            If you hold any of these certifications and are interested in teaming 
            or subcontracting opportunities, we encourage you to register with us.
          </p>
          <a href="#registration-form">
            <Button variant="outline" data-testid="button-register-small-business">
              Register Your Small Business
            </Button>
          </a>
        </div>
      </Section>

      {/* Strategic Alliances */}
      <Section dark id="alliances">
        <SectionHeader
          subtitle="Long-Term Partnerships"
          title="Strategic Alliances"
          description="We build lasting relationships with organizations that share our commitment to excellence and mission success."
          dark
        />
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-federal-blue/30 border-federal-blue/50" data-testid="card-industry-partners">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-mission-gold/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-mission-gold" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">Industry Partners</h3>
              <p className="text-steel-gray text-sm">
                Established relationships with leading government contractors
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-federal-blue/30 border-federal-blue/50" data-testid="card-tech-partners">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-mission-gold/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-mission-gold" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">Technology Partners</h3>
              <p className="text-steel-gray text-sm">
                Collaborations with IT and technology solution providers
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-federal-blue/30 border-federal-blue/50" data-testid="card-veteran-orgs">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-mission-gold/10 rounded-md flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-mission-gold" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">Veteran Organizations</h3>
              <p className="text-steel-gray text-sm">
                Strong ties with veteran business networks and associations
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#registration-form">
            <Button size="lg" data-testid="button-strategic-alliance">
              Explore Strategic Alliance
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </Section>
    </div>
  );
}
