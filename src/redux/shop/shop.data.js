 const SHOP_DATA = {
  hats : {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaHBwcGhwcHBweHB4hHhoaGhoaHB8eIy4lIR4rIxwaJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCE0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALEBHAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAD4QAAECAwUECQIFAwQDAQEAAAECEQADIQQSMUFRYXGBkQUGIjKhscHR8ELhExRSYnKCovEHI5LSFbLC4hb/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAkEQADAQABBAICAwEAAAAAAAAAAQIRAxIhMVEEQTJxYYGxkf/aAAwDAQACEQMRAD8Aq1S0hVFHeCk+EGkywEhjQudRiXq2MTs0i+6iqulBxILxuzy0lD+wq5BoGjCOjMKENQkcA/jCYswKxXtMpXaYg4DInMw+LKhnTXh8+CK4SwVFNAUhJJP7iS2+mkCDKFKTjcLZXQfFzC89ZBcpQH2NXJ6RtOOL8W1aDz7L2byk0r9TnezeMAIBcwFyAXOgZuHnDZnrKKywwzCmA54wsyHu9oZAk+ogq5KQKFQGdS1cKthxi4NNLNHKTUAntPvLRs2lSQyUV2gV2UxjS9inAHzLWF5iCtVVN5cCBEBG1WigKpaATRwQX2tWFLRLJDhIA2K02QebY1GiVEjWBTJJRQmgzxaAFpbn6eWPzCJInEHAjDPGr6Rl53Fa5kwOdIWkA3V6YOPKAG5fSK3ICArUFIPMkCBqtRdzLKa6D1EKJmqGobM4xaWS8tFF54AAnypDMG6El9Jou1lkNm4V6aQNVsRMWAkM2Iu15gisFRKKDUkEuXKUl9j5Qsro0VYqKsWcDkGrArTGUuDU0P6rp9YZnLCgzJfUfKQgmzlADlT45D4YYstkUXYkVq6hXnAD9ksiig9g73Htp5CK9S2U1xRFPpGIzDvFqmym4VX1UGALfaKecti7roSwcPgDlvyiJlaHDNBIJQARqeeWERl2xQICKHHM4ZCnvGlSkrTeK1BTZnlkfaMlWO4m8ZhFA9cdmkUgdc2YEveIeoLc8YyzzlqIN/HS83iIasiEsElSjhjQeApBkBCSXWWatR8aBAf4azt2BwMcRSNSrOsE1AVm+I8KQxLmy0gsstvI8hBCEKBuqUDtBjQNyrOVAFq/yJG/7Qb8oRhdGpfDhCv5dSCDeW2y94EQ/JQlSRVb6sTwqYEATJSwWJTXfzBweGZEtVKhztNeVIjaLKgs98biryBjaZaAGY7z6vDBozMv0DgasS/jAlhaR3s8SH2YwsFXFOUUNNsGK0kvdYcIaMK/pKYAtCtFFJbQj3AhtE5DfVwwhW2kFCikgNUnRi9Qz5ROQs3R2kcj7xdIVX4LOwQRgwuvvq3tCsmetqpfGgAyJwi0/JkA3qhscBsbWK+XZVBAZsSxLZl/WMo0zSJi3dKC+18sdkRlWy8pTgfSHrodTthhikFSjVy+G/J/GFuj031KLpAUp2ONKMCzZcYoG5a5aqEJB1fMZwEWu+u4oOkpoc3ftN7QlapC757IKXDd16/xfwjRtQQWCXo1QRQtAF3Ms6EUcJI0LPq4LmFVTxeu9rTGnkRFSq0pyHa008cYNKUT9KiRXIeMCIPPfAXhmouKZYNu5whOWpHacvkcK6nhDCFh64/Mw0DnKCjU4YD/ACYyUCLT+4vvHgAIGmYXYnbWJUeqhy+0DUU5P84xoE5iSGOuGPsIILxFSef3eIrBIGJyArE7yRW5zdt8ZAouSo5M+37w1ZpN1L3K69rKJIINMOAicuewy4EQBiZagKh31cNtqYBMBBokPqEiDKLmhSdjn7Rqcg5nT31gUDJUVd5OG/HWkOlF1ycxTTk0CkylEFnrgwoYZR0dMID03qHpAaQs1sJoW3AM8Nywgkm4H17PvA5HRwJcgnf6EGHZdjSHNynhyeGDRS0rIDXA4yCEl+MElzRccAg5gJT5sINPsRqoKQBtAfHKCoshUKqJ2uw5Vi4TRGz2i6xIweh8IsL4UlyQH0BfyMOSbGgMLidXp5NG5tlCa3g3AZaseUMGlb+UUE99Sjs+8TkpUMCRSuDjR+1E51mSQwWo7deYgSpH7wDoT4OPmEVECoWt8SQNoHkawRF9yb4baoDwgMqzBRAe9rdUpxk9SRDS7OE5V0BHKkNQxmkTzecuSMD/AJDQ4m0qJdknUG6T5RXTZSh9JIO8tyMSlywkOosca0HjAFgue6rqkpo2JAwyjU+zAG9fcnBiQOeEJLnqoojsvlTfv5Q8mbeAKQxTikAEtnhjDBoomQDi5BoTeJFNg02wGz2Zx3RpypBnOQPzWKW0SVXj2lDZdjKp+hi9lgZ7pZRwdqVBYaUAejmKtdrUEtcUa5PlvEQFrAIBDirDBt2WWsFs0xJYpJc4hQPMKZqVxgUOZ0tSC7pJGYf0gHRKRdoSnF3DagekNWm0iWgsCs6Vug+kIy7UDLCloNRXCpxpArIWqSQSpKw7viW3QtJs61qYJK1nJLlR4Yx0nV/oFU8X1i5JOF5IC1bUbP3Hg8drYbLLkpuSUBAzI7yv5KxMbmWYqkjiOjupdoUHWUSh+43lf8RTmRF5ZupklPemzFHO6EJHkT4x0YBiYlnQxvpRjrZRDqpZhnN/5j/rC0/qbJV3Zq0n9wQfIAx0xRGiiHSidTPPekepU5LqRdmDQGrbj6PHPmyLSq6QEkYpNCN+cewFJEL26yInBpiArRWChuPphEc+jSv2eT/ly4cA1rX3iSAQaBnHzCL/AKb6vzpJvIUFyslXapc4LAw3j7RTFAHerTNwOdKRzaaOiaYOUFAsEvXT7w2mSsYobGjmnM4RuzzigBgKtmRydVYe/NqLKbxH2iFEE2ZIYlBzrU+Rg6FIobvMH0hycumAbi8D/CBIDO+lW4kQIBTMRgkFtp96iG0rvM6U0128YJJk3dD4ww+xI4EQAuq3FJb8MKGqT55Rn/kU4fgrps8mGENiUjFw8ARZ0E4JrugDU24tLFK+RDcIHIlgKHbDaOQ/CN2hEtOIzoAKawKzoRMVcQg3jgApQPgaRdJhbSlINEqD4Nfc76mJSrOpYIHbByNeTPFp0b1XQgBU1Sv431EcXMN2npuRIDJugDRgI1n2zO+iildWpxLpTc/kpJ8GJhhfVSaS5VL8R6ekL2nruh2SocHMKK66aqI3pMNn2XK9FuOrsxAN0V1Stz/cBCc7o5aCVLC/6ggjmPeNWXrcFYLSeNYurN1hSqivGKul+DLdLyUapaFd1wf4k8mwgS5akCpJ0vBdNDWOmm9GyZodDIVqAG5e0UPSEqbK7CkJL4G6ljuPwwawqeiMxd8BK1uNxLaYmISJgQSFAM2IAc886awCfLWogplYaANyjYTMYOlrpqAK+EQoZEx+6MiMPQYGELWiY+KcNTt2wdUlRBYqA2E/DCsjoYTQVqmKxYVyDerwAquxO6hLAAxvF64VBzjJKA3aAQP2qBB0Jp6mLUziAFi+WxYvxzpXOIfgX2WpBJObEE6AswY7hGDeFNaUKSklLEbCDuwr4R0vVjoa/wD7s5AuCiEl3WRmQ7XA2ld2I+j+ik2hYQpDIFVM47IxGVS9N+yOwSHISkMAwSBgAKADZG5ne5iqzsFDqPkIMpCEB1nh7xC1WlEhFaqOGp2COR6Qtyll1l9Ej54xz5udR2Xk1xcDvv8AR0U7rChNEJKtw9TCqusK8kcz9oruhLIZqwFm6lnYYx0yeg5d6ocNQEmPPN83ItXY71HFDxlVL6zK+tHIgxZ2TpWTMoDdVpgeRil6VsKULITQUisXJB+VhPyLl5XfCvgils9jt1y22jWAKTFJ0P0ypBCJpvINAo+SveOimozGBj28fJNrUeO+Nw8Yq7bQcQcCNDHD9bOjFSP96XWUSygzlBOX8DlvaO6XAVJSQUqAUlQIUDgQcRGmtJLw8skdKEXWBIAbCm3LCsNItThqlO+o2jQv5wbpno4SJpQoIKSQpBV9STg/iN4gIBUXSlLYFgG9Pgjk0dUw1mQDiCojR35s8PiclmCC+GDnyiuTJrgk7ix4GC2lRQkUZRet7PUuBupDQMmfLfFIpmIYlLSXwOFaRTJ6QIF00OoYl9eUPyZ6jUCmn+IaMG7yB9Ka4lhjEErluS+OreERtNrZNUOThprApVmvlrqhqyj41iAZk2RM03EBydDTnHW2SySbFKKlEOzqUfIbI10LY0WeSVrpRyTkMakx5Z1v60qtKzdJEtJ7I12mN+P2Z/L9F11i67KWSEG6jXM7h78o4m09JKWXck6msILWSaxgh0+y7ngKZ6z9RjQnrGcRESi4h1MIi1fqS+3PmItrB0utHdVeH6VGvBXvFGqNCmEYcoqrfJ6b0J0/eqg1GKTiI7ew25E9FxYf0jwiyWoggpLLGB12HZHddAdMXwFCihRQizTTxkqftHRdKWZUlTUuqqkgM+zeIGsdg0dsQkh46CUpNplFBLEh0nNKsjHKLtFxRQtV1aSQpsiN+W2NPsZT0NZZ6VAsnDHCm0thHPvMJJAo5+/jF1ZretK1XV0IcYY4UyhSbLJJN08BSMvWaTwrzacgtF3QNjziYnlSGKkK07RfEn4IqpawoVUz/uR49iJS7HfUlCVKdRCcEnEt+nDfAp3nQFnuSAogBUw3i36RRHhX+qLyyshBmKoB8MKLSAQlOCQEgbAGEb6wruoRLGePCvnF5K6IbMRPVeFFb7YVkrVtujQZQjZ5db6qqPxoJaBeWBknzg6EYR8lt09Z9SUpWILZpxQtKhiI65FvSUX9BUekc90PYUzFkKwAc+kPTrAUKuAm4shtlaiPRxO5nV4f+nn5VFPH5RU2+YpRKjmYGmSGjq7bYk/hFLCgpwjlEKo2kc+WKh935OnHapdvoFMlZHAxd9W7YVBUleKcDqMjvHtFUsOI1ZJtybLXqbquNPY8I1w300n/ANM8s9UtHRzAxIgC4dtoqDqISXH1D5pR9bbH+JZ74Hbll8ATdUwUObHgY5OzSkgUVUjZ80j0UICgpBwUCk8Q0eaicUqKSkuCQe7iKHOMUjpL7FjZ0E576CFLbZQ4PZIH7PCgpGxa3pcVwKfMnfEVrBHcL5VfDdGMNaJIQp2KBdJ7xox4+HpD8kKfslLZBjljtiP5nVAw0zHCFp9pBU90h8rqj6RMw1paLlKUU9oUP6dKtjsjoer9kvKSDiaq3aeQjlbBNStaUXTjoQKVOWzxj0Tq3Ja+vh6xqUYpnL/6qdOFCEWZBYrF5bfpwSOJB5R5StTxd9b7eZ1rnLel4pTuHZHgH4xRRpew+ywwmNXowxqKQlfjd8xCMgAgMTCYGgwUKgCBDVEW/RVuuLSvIslfofTlFcBGScSnWOdrUdJf0ew9A2tlCtDDPWuyAlE0BPb7CnD9oB0mhGIBH9Ijl+rFpKpaDmKR3NtR+JZVgC8oJvJG1NftG5eycmumjjv/AB5WB2wFA0ZCgNxcF+EGKinslaXH7ftCSbdaUikr/kvn9OEVlomzSokykP8Az+0Z7GysVKAYBxoeyP8A5i36sSli0yUkpKb792tAVY5GkVybwd1VZxQeZrFp1bmAWmTgSVthg4IxO8QXkPwegSqrH8h5wt1gWTNCckpcccfKGEllPoYD1gS01Ksin1jn8v8AD+zXx/yKJCe0rfFjZ5DrQCKEjk8IEMrfF/NQShC0jugR8+Z3+j3XWZ/IVafwJt4JNxQq2Ai2UpKwlSSCxBiVnmpWkHWFbRY7vaRTUZR71Lmdnun3/R4XSp5XZoy3Tr/+2jE0J0GcUvStjTLUm7mKx0NkswQnbmdYrLdLEyalGlVe0c+aW51+XmfwdOKkni8IrbXZwkIUKghuMV81HZ3KjoOlpYRLA/dTximUi8UJH1KHnHnc9Lz9HdVs6dNbO4iEFGHOklMEiK8mPrI+ayaDUR590xISLRNoe+vxUTSuFY79GIjg+lyVWiazd9QxORb0jNFgUStI/a/7T7xNEw0Z/Fv/AFgP5BTu/B1QYSSnEcy48RGDoGSgtiQ9TVXH6YXWhjQ+PvG1zSnItsCWhZVqOh8OHzZApbdDodZJagOmo2x3vRSrlmWrQLVyB9o866Dtd5ZFe7m2o03x6J0WL9mWnMpWObxqTnR4LaS5O8wEwSdjxMQIgjT8g40YkY0YoNRkZGQBsGCSzAkiDIgQYEQNFCNgxo94RK8Go8nb9TT2VDa/iY9L6MTelqTqkjmCI866nS+wT8xMej9GBpZOgPkYzxeCcv5M4daFBrylHRwp/JoUmSq5/wB0WhQkUVhlVXrAnQKU5mDKc9LnFQqgUYkhywIfGsSs05KFImAl0LCiH0UDTlhtgAViVYAOaA7KNrGkrSpL3k7ilXmKQKeoTR2qYGo4xO3yfxJN4d5Hw+HlFV0DbBNs6DS8jsKbZ3f7SIuLLOumuBoY1cq5cv7Oc05rTl5lQ+kdF1etaVIuKxGG0RX9K9HGWb6KoOGzYYrUKKCFJLNWmX2j5i3iruvB9F5yR2OnKFyVOHKPKLGz2pKxQjdFTYen0kALDHUYQS0IlrF9CwFbDHpm0u8PV6Z56hvtS7+xq3dIBPZR2l6DLfELBZLvaUXUak+kaQuTLFSl/Ewhb+mSrsy8NfaFUk+qnr+kiTLa6ZXb2a6atQWsIGCcd8R6FkX5l/6UYbz9vSEbPIUtVxFScTpqTF+u7JQEIxPwkxnhh8l9T8GuWlE9KFrdNvLOgoOELvGRqPoHiCIWEuo4JBJ3APHnqFlRKySCok01Jc+cdZ1jtNyzlI70zsj+OKzyYf1RycuUoD57xzpnSUOy1kYPyEZ+MrM12paF0oVmMPmsEK2IceONIyawBaUE1vebQhNl/wAX5RaWieQO6TX1z2QtMr9MTRgv0Wbs1JoxcY64eLR6X1WnghaNr8w3pHmqpZahOx/8x1HVvpG6tCjQK7KtnwxpMlI896yWEybTOl/pWpv4kun+0iKwR6T/AKqdDG8i1IFFAIXv+hXGo4CPNk6RV6D79yKkRpSIOBG1JikE2jIKpMDMAYkwRMDgiYAImJyg6oG8WvQdhK1pAGbmOdvEdYX2d71Wst2WNsdhb1/h2ZZzKbo/qp5PCHQ1ja6BgBBusM57stJwqd5wHJ+YjcrJONPqo49kqYmhGRdo2tAfHxP/AGizEo4Enl94j+VTt5D3jOGjlvzQul0gDd6tCIXeQEijjEmgrTKOpnLSoMEIB1DDf82xWIsqkoKnD3cPGu3dEwuheqVvEmYoKohdFVDUwXwPgTHeqSxjzdMg1CqkkscKMw8o6nq50kQlMmaRSktb5ZIV6R0l/Ril9nUSZzC6oOk4iEbX0IFdqSofxPofeDkNE0LIqC0Tk4ptd0I5Kh9jnJ9lWg9tCk7QKe0QSpqhUdam1KzYxFUxBxlpPL2jyP4fpnpXyvaOTQHOajoBFrZOiZi8RcTtx5Rb/mm7qAIXnT1qxPAUjc/ES/J6SvlN+EGStElN1AdWZ9zFetRJc1JiRTGiI9cypWI8rbb1moxIzJYCpJwAGJMbSl45frJ04gj8FChcJZaslH9I/bqc/M3gS0rulbYLTOKx3Ei6gFx2aureTXiBlG/yN8OeFYUl3MEqR83RYSZTgC824q8I5PudV2NyLOoPT5via5ZzfjCy7OoHvngK+UbWi9Qk+OMCkplkJDudmPk8KTZag9TFimWQGvHc4jakquhy3zfEwaUy5a8zSmUGsKlp7zkHNmOw4Q2lCnI9oApCwXdshj7xAd30VaEWqQqRNYum6doyUNvqI8k6z9ALss0oU5S7oXkR76x1XR9qWhYWkVDYZ7CBHaLTIt8koWO1mD3knURvz48mfHnweFpXkYkTHSdYupc6zklIMxGRGI3xy5QR7GCr6L0/aIrgbRMg6Rq6dDF0dLIgRIRNMonKLPo7ohcxQCUk7coxVJGpkTsllKiKVOEemdVug7iQSO0Yl1e6shDKIvL8BHaSpSJSCtZAAzPkNsJlt9VEu1nTJhWmRLK1ZZZk5ARxNpnFa1LIdRNSwPLSLDpfpH8ZQoWSqg2GlWzMBTNSGF0Y54DxjbemJWA5E3UKG0B+dKQQqGq/H3jc60JdgBzjELDdweEQpySrGUv2w5GTvuEOoQsSwFHKmLtxrC0mcF1F5N16KJY8jjEQslJCgwGlfDnGUVlgQGokjLM/OMDmpBwG/AbojZlX0gB3O1qjfG0LLgAZtV+Ii6MLrorp4oARN7SMlO607/1Dx3x0siYlabyFBSTmD8aPOlzU1BcKyxptAgcqbMlm9LWsK2Ah9+RG940q9mXPo9NeMeOJsnXGck3ZstC6s4IQrjUjyizkdcrOrvImJ/pCh4GNdSMdLOhMRVFP/wD1NmIcLX/wVClo65WdPdRMUdwHmYuoYzoDAbVORLTfmLCE7c9gGJMcraetk1VEITLfPvK8Q3hFBbFLWq9MWpStS54YUGyI6SKpZbdN9Z1TXRKBQjMkdpY2tgNn+IpzdplvEGRLASAAeR54QUrCclbKM0cqrTrM4ITEAHslJOznnDlltqkkDni23CFp05OJ12HJoYsE5JpyoPWImWkWf5hw+Q3/ADjGvzKTUHwJ9TG0ISavzaBIQl2YbxQ+caIOoT2SfX7QJZIq/Nm8REUJS7YNVnPwxJCBrsIeABKrgQQDUC6eGGMRSpOYqNghn8PtYltf8GCKCRipxxgBaXaQdQPjYQxJtRQp0qZQzc8oGEBVWYHD4BBxZQz+LEwIdHYesqFAInMHzyO/SMt/VWy2kXkhLnNP2jl7iMCRvP8AiCSJq0F0rIqGag1NPeLqflESa7pk7T/pul+wtXP7Qsj/AE9Oa1chF7ZenJ4A7ctQ247MDDo6wTf0I4vE6ZL1UVFi6ioSXKSr+R9o6Wx9CIQMABsDCK6Z09OIwSnckk+NIqptttK3vG8NCWxwoIqUrwZbp+WdJbempMgEJZax9KTTirAecch0h0rNmrvrah7KAoXQDR212mAz5age0w301f1hZEu9W8/8f8CDelSwnNtk0J7gqz1FMKaxBNpmHFCjuI8oamWcXS6SGYnB+FY3+AEpevm2fCIUVNsUkH/YXR8tPnhBv/L6ypz7oZlrcUenh4ZxGZa2LFRfeR4RNKJkkJF1QriKe7wK1WZSQAFdk5UpjjGpE4NdShxm6Q+2jU5xq0NdIwzqG5xSAlryBJ2MfPCGfzKkgi4d9PekJonBIcAEGhLjwrGJWhdbv9xTrmImDSSZ6ip7jviffKC38DdrWoq0TkgsRcbcr1gBQo43t1Dz1ilNqSkjAEvm3lArgqAwPBthLQQSxlf4GJKSE5qw/a+2BANQguQ1IjLlJe8UguBXCBrB/UW0LeMaM9vqbw8IAmucxqNzVMLzZ6ne4W1zgyJqaF33feDT1JOpzqB6RGEAlz1UoW3Rr82rBvAxBZvCpb/l7tAl2gAM40wPvGDohgTsyebiDWJROLUwJiuVaa/T4iHbDaDsY1xBiyRjolg4qpo4idxOAA308DGkkKPuYIlADgJpkKU+bI2ZNJuJFRvdvCDy5iTUMw2gCEiAPp5CJJQaMMd1PGMgskgNt1c4cMYDcwcvxMQCwzADlG1kEOzHYNNxjQHZRSzElv6j8+0ZNWkfUeLwgLVKycgBnL+2LwVE9CgQH4OC29ngDZkhib1as4+FoJLlFTB9XJDh9xygZmIcADA1dRG1qQJcxJa6pj/IPweALJMgIIwY0wTE1pU7OEgbeWAimQKllkvins04uTDaLTSizzSacRAFgFKA7Ic1xPoKvwjETFtVNNrcYQFoURTM4sDzEMyrQpIBURoyQ/GmAiaTCNqkEq7QF1qAKatXpg9IlJsiT3QS2HaGPKCqnXqpxalFQqbUsGoIGrkDlWKAfSUsAKJSt6sRXARKVaAtA7SmaoKf/wBRO1TyQXL+OWVIHIm9gEJcXQ+u6ogDSEULLFBSjeteUSly0gNfHL7RMLaoSw2MNuRjZnnb84xkpSoAZwSOBBHjEFhLhsduPhApyQT3gNgJ15QJclyO0o4/q36cI2ZGb6Ce0U5/SDs0aNX0Ja63EJHIAQqEAYLU2wt5RJMpRJum9p2wPMQA3+MwYFFXFSnzMYiQCK13EV/u9IUWhTVJA0YebMecQCC1AVH5iAPWAH5iAMEk0ahf/wCoXXLVmDuP+YVWFfp419/ONoKtByd9pcmAGVKpUH/lXZrCgQXID+P/AFgi1nTiH8hA6H6fH3gCQSpOA8x6PG1KWHd6Y/CnbEFLuh2KW2n1jQtT4Hx9huiMJgF2spNXbh9oGJ52F9QPeCKSlTvjrj6QukKCsacPeJhdDylvpub7xaSJ6Uhiz6BPj3jFbKQonA8otJaGAvEtgxAOMEisOpbsQkcXHpGS5LuGz1P/AFiCaUQUAbR94kAcSzcYpCMxDNTeCr3AgSANKbDB0WlL6cT6loybNV+lNdSQYmDTaFhOAV4+rRJC3+lVNacqwNN/FQYZdr7ViSlNW+ttEn2EUDEpO1fMHk6oDaVlvqZ8HFORJMD/ADCa4nfypSILkpZ8tLqeOQ1gAdotTAMVAYEsTwZmbCDy5qlB0uP6CfIQO4kihUoDUBuYAhmWhITS8+bJeA00hRTUr/sVDqJpUHcKLU7JHiIWlBNXv0/affGCylC9UkYPRXoowKSRabxuUba/m8YQAKXDTU+jvBRMRgVGmxZaAGcgd5QIxrRqtgfWBCKFqIPYy/UptNK+EakTFk3TfGy8kDh94OtSMkINMrgPzbApSAC4QoAEP2rwPI4U2QAdc0Jzuna3m8J2OaSl++A7BLPQtgTxiVpn3iEFJyqQRhtcRGxzALzFbXixqQPHbnEYQ3MSpmSQToUm7zAMClqnNVUsbLq/aJWhK1HE4B+y/vEysJo6qbB/0iFFVesAteAjIyNGRa04fNYgvHl5xkZBBlbmd58zFnZseXnGoyNEDKy+ZmK6d3jGRkQphy3Qaz9//l5GNxkCGK7vH2irtHdO+MjIAJY8onau6nf6RuMiGvolLy/p9IuZHfG70jIyAYaZBBhGRkCCNoglmy3DyjIyAG04CJrw+aCMjIFII7yd/oYQt+PzSMjIAnJz3esR+ob/AEjIyACy8fmyLD6Dv9BGoyBRwe0IzceXlGRkAE90+cSV9e8/+sZGQBRjv8vSHuj+980TGRkRkQ9My4+cCmYxuMiFP//Z',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  sneakers:{
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  jackets:{
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  womens:{
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  mens:{
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
 };
  export default SHOP_DATA;