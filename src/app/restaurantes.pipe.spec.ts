import { RestaurantesPipe } from '../pipes/restaurantes.pipe';

describe('RestaurantesPipe', () => {
  it('create an instance', () => {
    const pipe = new RestaurantesPipe();
    expect(pipe).toBeTruthy();
  });
});
