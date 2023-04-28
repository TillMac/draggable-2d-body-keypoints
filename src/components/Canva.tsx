//@ts-nocheck
import React, { useRef, useEffect, useState } from 'react';
import interact from 'interactjs';
import './Canva.css';
import { Box, Container, Stack } from '@chakra-ui/react';
import ResultBoard from './ResultBoard';
import Lines from './Lines';

const initialState = {
  RShoulder: { x: 116, y: 175},
  RElbow: { x: 78, y: 431},
  RWrist: { x: -23, y: 635},
  LShoulder: { x: 455, y: 235},
  LElbow: { x: 497, y: 487},
  LWrist: { x: 559, y: 700},
};
// const initialState = {
//   RShoulder: { x: null, y: null},
//   RElbow: { x: null, y: null},
//   RWrist: { x: null, y: null},
//   LShoulder: { x: null, y: null},
//   LElbow: { x: null, y: null},
//   LWrist: { x: null, y: null},
// };

const Canva = () => {
  const lShoulderRef = useRef(null);
  const lElbowRef = useRef(null);
  const lWristRef = useRef(null);
  const rShoulderRef = useRef(null);
  const rElbowRef = useRef(null);
  const rWristRef = useRef(null);
  const [pointData, setPointData] = useState(initialState);

  useEffect(() => {
    if (lShoulderRef.current) {
      interact(lShoulderRef.current).draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoScroll: true,
        listeners: {
          start (event) {
            const target = event.target;
            const x = event.page.x;
            const y = event.page.y;
            target.setAttribute('data-x', x-205)
            target.setAttribute('data-y', y-125)
          },
          move: dragMoveListener,
          end (event) {
            const x = event.page.x.toFixed(2);
            const y = event.page.y.toFixed(2);
            setPointData((prevState) => {
              return {
                ...prevState,
                LShoulder: {x, y},
              }
            });
          }
        }
      })
    }
    if (lElbowRef.current) {
      interact(lElbowRef.current).draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoScroll: true,
        listeners: {
          start (event) {
            const target = event.target;
            const x = event.page.x;
            const y = event.page.y;
            target.setAttribute('data-x', x-205)
            target.setAttribute('data-y', y-145)
          },
          move: dragMoveListener,
          end (event) {
            const x = event.page.x.toFixed(2);
            const y = event.page.y.toFixed(2);
            setPointData((prevState) => {
              return {
                ...prevState,
                LElbow: {x, y},
              }
            });
          }
        }
      })
    }
    if (lWristRef.current) {
      interact(lWristRef.current).draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoScroll: true,
        listeners: {
          start (event) {
            const target = event.target;
            const x = event.page.x;
            const y = event.page.y;
            target.setAttribute('data-x', x-205)
            target.setAttribute('data-y', y-165)
          },
          move: dragMoveListener,
          end (event) {
            const x = event.page.x.toFixed(2);
            const y = event.page.y.toFixed(2);
            setPointData((prevState) => {
              return {
                ...prevState,
                LWrist: {x, y},
              }
            });
          }
        }
      })
    }
    if (rShoulderRef.current) {
      interact(rShoulderRef.current).draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoScroll: true,
        listeners: {
          start (event) {
            const target = event.target;
            const x = event.page.x;
            const y = event.page.y;
            target.setAttribute('data-x', x-210)
            target.setAttribute('data-y', y-190)
          },
          move: dragMoveListener,
          end (event) {
            const x = event.page.x.toFixed(2);
            const y = event.page.y.toFixed(2);
            setPointData((prevState) => {
              return {
                ...prevState,
                RShoulder: {x, y},
              }
            });
          }
        }
      })
    }
    if (rElbowRef.current) {
      interact(rElbowRef.current).draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoScroll: true,
        listeners: {
          start (event) {
            const target = event.target;
            const x = event.page.x;
            const y = event.page.y;
            target.setAttribute('data-x', x-200)
            target.setAttribute('data-y', y-200)
          },
          move: dragMoveListener,
          end (event) {
            const x = event.page.x.toFixed(2);
            const y = event.page.y.toFixed(2);
            setPointData((prevState) => {
              return {
                ...prevState,
                RElbow: {x, y},
              }
            });
          }
        }
      })
    }
    if (rWristRef.current) {
      interact(rWristRef.current).draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        autoScroll: true,
        listeners: {
          start (event) {
            const target = event.target;
            const x = event.page.x;
            const y = event.page.y;
            target.setAttribute('data-x', x-220)
            target.setAttribute('data-y', y-220)
          },
          move: dragMoveListener,
          end (event) {
            const x = event.page.x.toFixed(2);
            const y = event.page.y.toFixed(2);
            setPointData((prevState) => {
              return {
                ...prevState,
                RWrist: {x, y},
              }
            });
          }
        }
      })
    }
  }, [])

  const dragMoveListener = (event) => {
    const target = event.target
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    target.style.transform = `translate(${x}px, ${y}px)`
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }

  const dispathcer = (event, name) => {
    const x = event.page.x;
    const y = event.page.y;
    dispatch({ type: name, payload: {x, y}});
  }

  return (
    <Box>
      <Lines bodyData={pointData} />
      <Stack direction={['column', 'row']} spacing='24px'>
        <Container my='center'>
          <div ref={lShoulderRef} className="lShoulder" onChange={(e) => dispathcer(e, 'LShoulder')} />
          <div ref={lElbowRef} className="lElbow" />
          <div ref={lWristRef} className="lWrist" />
          <div ref={rShoulderRef} className="rShoulder" />
          <div ref={rElbowRef} className="rElbow" />
          <div ref={rWristRef} className="rWrist" />
        </Container>
        <ResultBoard bodyData={pointData} />
      </Stack>
    </Box>
  )
}

export default Canva;
