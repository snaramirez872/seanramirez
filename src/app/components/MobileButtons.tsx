import Link from "next/link";
import Image from "next/image";
import email from '../../lib/assets/icons/envelope-regular-24.png';
import linkedin from '../../lib/assets/icons/InBug-Black.png';
import codeIcon from '../../lib/assets/icons/code-block-regular-24.png';
import file from '../../lib/assets/icons/file-regular-24.png';
import { Button } from "./Button";

export function MobileButtons() {
    const resume = "https://drive.google.com/file/d/1iIIlRDXKuEJkgeD5tOq1edP_uWvo_ug4/view?usp=sharing";
    return (
        <div className='mobile-buttons'>
            <Button
                href='mailto:sean.ramirez.dev@gmail.com'
                name='Email'
            >
                <Image src={email} alt='Email' width={24} height={24} />
            </Button>
            <Button
                href={resume}
                name='Resume'
            >
                <Image src={file} alt='Resume/CV' width={24} height={24} />
            </Button>
            <Button
                href='https://linkedin.com/in/seanaramirez/'
                name='LinkedIn'
            >
                <Image src={linkedin} alt='LinkedIn' width={24} height={24} />
            </Button>
        </div>
    );
}
