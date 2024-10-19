import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import AllEventSection from '@/component/event/AllEventSection'
import Layout from '@/component/layout/Layout'
import { getEvent } from '@/sanity/sanity.query'
import { EventType } from '@/types'
import type { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "Facilities",
    description: "Developed by Azizur Rahman",
  }
const page = async () => {
  const event: EventType[] = await getEvent();
  return (
    <Layout>
        <BreadcrumbSection header='Facilities' title='Facilities'/>
        {event && <AllEventSection eventData={event}/>}
    </Layout>
  )
}

export default page