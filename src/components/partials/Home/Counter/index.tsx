import { Button, InputNumber } from 'antd';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  incrementAsync,
  incrementIfOdd,
  selectCount,
  setAmount,
} from '../../../../store/slices/counter.slice';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <InputNumber
        value={count}
        onChange={(value: number | null) => dispatch(setAmount(value || 0))}
      />
      <Button onClick={() => dispatch(incrementAsync(1))}>Add Async</Button>
      <Button onClick={() => dispatch(incrementIfOdd(1))}>Add If Odd</Button>
    </div>
  );
};

export default Counter;
