import { ChangeEvent, useEffect, useState } from 'react'

import { useRouter } from 'next/router'

export const LangSwitcher = () => {
  const { asPath, locale, locales, pathname, push, query } = useRouter()
  const currentLang = locale === 'en' ? 'English' : 'Russian'
  const changeLangHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.currentTarget.value === 'English' ? 'en' : 'ru'

    push({ pathname, query }, asPath, { locale })
  }
  const languages = ['English', 'Russian']

  return (
    <div>
      <select defaultValue={currentLang} onChange={changeLangHandler}>
        {languages?.map(language => {
          return (
            <option key={language} value={language}>
              {language}
            </option>
          )
        })}
      </select>
    </div>
  )
}
