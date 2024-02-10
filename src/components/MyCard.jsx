import React from 'react'
import { Card } from 'flowbite-react';
import { Button, Modal, Timeline } from 'flowbite-react';
import { useState } from 'react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';


const MyCard = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <Card className=" h-30">
                <h5 className="text-normal text-gray-900 dark:text-white">
                    Poor customer service received at the local tax office.
                </h5>

                <Button className="w-20" color="success" onClick={() => setOpenModal(true)}>Updates</Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Complaint Status</Modal.Header>
                    <Modal.Body>
                        <Timeline>
                            <Timeline.Item>
                                <Timeline.Point icon={HiCalendar} />
                                <Timeline.Content>
                                    <Timeline.Time>March 2022</Timeline.Time>
                                    <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point icon={HiCalendar} />
                                <Timeline.Content>
                                    <Timeline.Time>April 2022</Timeline.Time>
                                    <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                                </Timeline.Content>
                            </Timeline.Item>
                        </Timeline>
                    </Modal.Body>
                </Modal>
            </Card>
        </div>
    )
}

export default MyCard