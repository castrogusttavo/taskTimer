import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { CyclesContent } from '../../../../contexts/CyclesContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContent)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="tasks"
        placeholder="Dê um nome para o seu projeto"
        list="tasks-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="tasks-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="">Durante</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5} // aumentar o valor de 5 em 5
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
