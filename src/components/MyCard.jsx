import React from 'react'
import { Card } from 'flowbite-react';
import { Button, Modal, Timeline } from 'flowbite-react';
import { useState } from 'react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { Avatar } from 'flowbite-react';


const MyCard = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <Card className=" h-30">
                <h5 className="text-normal text-gray-900 dark:text-white">
                    Poor customer service received at the local tax office.
                </h5>
                <div className='flex justify-center'>
                    <Button className="w-20 bg-purple-500" onClick={() => setOpenModal(true)}>Updates</Button>
                    <Modal show={openModal}  onClose={() => setOpenModal(false)}>
                        <Modal.Header >Complaint Status</Modal.Header>
                        <Modal.Body>
                            <Timeline>
                                <Timeline.Item>
                                    <Timeline.Point icon={HiCalendar} />
                                    <Timeline.Content>
                                        <Timeline.Time>March 2022</Timeline.Time>
                                        <Timeline.Title>The complaint is under investigation </Timeline.Title>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point icon={HiCalendar} />
                                    <Timeline.Content>
                                        <Timeline.Time>April 2022</Timeline.Time>
                                        <Timeline.Title>The complaint is resolved</Timeline.Title>
                                    </Timeline.Content>
                                </Timeline.Item>
                            </Timeline>
                        </Modal.Body>
                    </Modal>

                    <div className="flex mx-auto justify-end">
                        <Avatar placeholderInitials="RR"  rounded/>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default MyCard