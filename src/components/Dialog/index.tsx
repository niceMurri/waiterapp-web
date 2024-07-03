import React, { useEffect } from 'react'
import { Container, DialogContent } from './styles'

interface DialogProps {
    children: React.ReactNode
    onClose: () => void
}

const Dialog = ({ children, onClose }: DialogProps) => {

    useEffect(() => {
        function listenEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                console.log('Escape');
            }
            onClose();
        }
        document.addEventListener('keyup', listenEscape);
        return () => document.removeEventListener('keyup', listenEscape)
    }, [])
    return (
        <Container>
            <DialogContent>
                {children}
            </DialogContent>
        </Container>
    )
}

export default Dialog
