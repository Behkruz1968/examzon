import React from 'react';
import { icons } from '../util/icon.jsx';
import Language from './Language.jsx';
import { useTranslation } from 'react-i18next';

export default function Overview() {
  const { t } = useTranslation('global');

  return (
    <div className='bg-white border-b border-gray-200'>
      <div className='w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between py-2 text-[14px]'>
        {/* Chap qism: manzil, sotuvchi linki, va qo‘shimcha menyular */}
        <div className='flex flex-col lg:flex-row items-center gap-4 text-gray-500'>
          <div className='flex items-center gap-1'>
            {icons.location}
            <span>{t('overview.city')} <span className='text-blue-600 underline cursor-pointer'>{t('overview.region')}</span></span>
          </div>
          <div className='flex items-center gap-3 text-[#5d78ff] cursor-pointer'>
            {icons.qol}
            <span className='font-medium'>{t('overview.location')}</span>
          </div>
     <div className='flex gap-9 ml-4'>
   {icons.sumka}
     <span className='text-[#8B8E99] -ml-4 '>{t("overview.message")}</span>
          <span className='text-[#8B8E99]'>{t("overview.message2")}</span>
          <span className='text-[#8B8E99]'>{t("overview.message3")}</span>
     </div>
        </div>

        {/* O‘ng qism: telefon raqami */}
        <div className='flex items-center text-black font-semibold gap-1 mt-2 lg:mt-0'>
          {icons.phone}
          <span>+998-78 555-35-00</span>
        </div>
      </div>
    </div>
  );
}
