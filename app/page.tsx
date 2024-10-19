
import AboutSection from '@/component/about/AboutSection';
import ActivitySection from '@/component/activity/ActivitySection';
import BannerSection from '@/component/banner/BannerSection';
import BlogSection from '@/component/blog/BlogSection';
import CategorySection from '@/component/category/CategorySection';
import EventSection from '@/component/event/EventSection';
import FaqSection from '@/component/faq/FaqSection';
import FooterSection from '@/component/footer/FooterSection';
import VideoModal from '@/component/modal/VideoModal';
import NavbarSection from '@/component/navbar/NavbarSection';
import TestimonialSection from '@/component/testimonial/TestimonialSection';
import ScrollToTopButton from '@/component/utils/ScrollToTopButton';
import VideoSection from '@/component/video/VideoSection';
import WorkSection from '@/component/work/WorkSection';
import { getActivity, getBlog, getCategory, getEvent, getFaq, getTestimonial, getWork } from '@/sanity/sanity.query';
import { ActivityType, BlogType, CategoryType, EventType, FaqType, TestimonialType, WorkType } from '@/types';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Home",
  description: "Developed by Otomatiks-Tambaram",
}
export default async function Home() {
  const faqData: FaqType[] = await getFaq();
  const blogData: BlogType[] = await getBlog();
  const categoryData: CategoryType[] = await getCategory();
  const eventData: EventType[] = await getEvent();
  const workData: WorkType[] = await getWork();
  const testimonialData: TestimonialType[] = await getTestimonial();
  const activityData: ActivityType[] = await getActivity();
  return (
    <>
      <NavbarSection style="" logo="images/santhose vidyalaya.png" />
      <BannerSection />
      <AboutSection />
      {categoryData && <CategorySection categoryData={categoryData}/>}
      {activityData &&<ActivitySection activityData={activityData}/>}
      {/* {eventData && <EventSection section="tf__event mt_95" startIndex={0} endIndex={4} eventData={eventData}/>} */}
      
      {/* {workData && <WorkSection workData={workData}/>} */}
      {testimonialData && <TestimonialSection testimonialData={testimonialData}/>}
      {faqData && <FaqSection img="images/faq_img.jpg" faqData={faqData}/>}
      {/* <VideoSection />
      {blogData && <BlogSection blogData={blogData}/>} */}
      <FooterSection />
      <VideoModal />
      <ScrollToTopButton style="" />
    </>
  );
}
